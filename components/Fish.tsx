// "use client";
// import { Html, OrbitControls, useProgress } from "@react-three/drei";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { Suspense, useEffect, useRef, useState } from "react";
// import {
//     Bone,
//     Box3,
//     type BufferAttribute,
//     BufferGeometry,
//     CatmullRomCurve3,
//     Clock,
//     DataTexture,
//     FloatType,
//     Line,
//     LineBasicMaterial,
//     MathUtils,
//     Matrix4,
//     Mesh,
//     MeshBasicMaterial,
//     NearestFilter,
//     RGBFormat,
//     Vector3,
// } from "three";

// import { STLLoader } from "three/examples/jsm/Addons.js";

// type Props = {
//     position: [number, number, number];
// };

// function Fish(props: Props) {
//     const backgrounMeshRef = useRef<Mesh>(null);
//     const forgroundMeshRef = useRef<Mesh>(null);
//     const [bones, setBones] = useState<Bone[]>([]);
//     const [curve, setCurve] = useState<CatmullRomCurve3>();
//     const clock = useRef(new Clock(true));
//     const fish = useLoader(STLLoader, "koifish.stl");

//     useEffect(() => {
//         // path
//         const baseVector = new Vector3(40, 0, 0);
//         const axis = new Vector3(0, 1, 0);
//         const cPts = [];
//         const cSegments = 6;
//         const cStep = (Math.PI * 2) / cSegments;
//         for (let i = 0; i < cSegments; i++) {
//             cPts.push(
//                 new Vector3()
//                     .copy(baseVector)
//                     .applyAxisAngle(axis, cStep * i)
//                     .setY(MathUtils.randFloat(-10, 10)),
//             );
//         }
//         const c = new CatmullRomCurve3(cPts);
//         c.closed = true;
//         setCurve(c);

//         const numPoints = 511;
//         const cPoints = c.getSpacedPoints(numPoints);
//         const cObjects = c.computeFrenetFrames(numPoints, true);
//         const pGeom = new BufferGeometry().setFromPoints(cPoints);
//         const pMat = new LineBasicMaterial({ color: "yellow" });
//         const pathLine = new Line(pGeom, pMat);
//         // backgrounMeshRef.current?.add(pathLine);

//         // data texture
//         const data = [];
//         for (const v of cPoints) {
//             data.push(v.x, v.y, v.z);
//         }
//         for (const v of cObjects.binormals) {
//             data.push(v.x, v.y, v.z);
//         }
//         for (const v of cObjects.normals) {
//             data.push(v.x, v.y, v.z);
//         }
//         for (const v of cObjects.tangents) {
//             data.push(v.x, v.y, v.z);
//         }

//         const dataArray = new Float32Array(data);

//         const tex = new DataTexture(
//             dataArray,
//             numPoints + 1,
//             4,
//             RGBFormat,
//             FloatType,
//         );
//         tex.magFilter = NearestFilter;

//         fish.center();
//         fish.rotateX(-Math.PI * 0.5);
//         fish.rotateY(Math.PI / 1);
//         const objBox = new Box3().setFromBufferAttribute(
//             fish.getAttribute("position") as BufferAttribute,
//         );
//         const objSize = new Vector3();
//         objBox.getSize(objSize);

//         const objMat = new MeshBasicMaterial({
//             color: 0xff6600,
//             wireframe: true,
//         });
//         const fishObject = new Mesh(fish, objMat);

//         const bones: Bone[] = [];
//         for (let i = 0; i < 10; i++) {
//             const bone = new Bone();
//             if (i > 0) {
//                 bones[i - 1].add(bone); // Set hierarchy
//                 bone.position.y = 1; // Adjust position for each bone
//             }
//             bones.push(bone);
//         }

//         setBones(bones);

//         forgroundMeshRef.current?.add(fishObject);
//     }, [fish]);

//     useFrame(() => {
//         if (curve && forgroundMeshRef.current) {
//             // Update the clock using delta
//             const elapsedTime = (clock.current.getElapsedTime() % 15) / 15;

//             // Get position and tangent at the current time
//             const position = curve.getPointAt(elapsedTime);
//             const tangent = curve.getTangentAt(elapsedTime);

//             // Update position
//             forgroundMeshRef.current.position.copy(position);

//             // Adjust the orientation to follow the curve
//             const up = new Vector3(0, 1, 0); // Define the up vector
//             const matrix = new Matrix4();
//             matrix.lookAt(position, position.clone().add(tangent), up);
//             forgroundMeshRef.current.quaternion.setFromRotationMatrix(matrix);
//         }
//     });

//     return (
//         <mesh scale={0.20} ref={backgrounMeshRef} {...props}>
//             <mesh scale={0.20} ref={forgroundMeshRef} {...props} />
//         </mesh>
//     );
// }

// function Loader() {
//     const { progress } = useProgress();
//     return <Html center>{progress} % loaded</Html>;
// }
// export default function Render() {
//     return (
//         <Canvas
//             className="h-full w-full max-h-screen max-w-screen"
//             camera={{ fov: 15, position: [0, 0, 50] }}
//         >
//             <Suspense fallback={<Loader />}>
//                 <OrbitControls
//                     position={[0, 0, 50]}
//                     enablePan={false}
//                     autoRotate={false}
//                     enableRotate={false} // Disable rotation
//                     enableZoom={true}
//                 />
//                 <Fish position={[0, 0, 0]} />
//             </Suspense>
//         </Canvas>
//     );
// }
