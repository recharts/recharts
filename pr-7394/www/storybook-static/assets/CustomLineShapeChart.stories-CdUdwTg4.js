import{c as t}from"./iframe-DcZ25aZq.js";import{a as p}from"./isWellBehavedNumber-DH8Wjvkj.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-C2zHba_T.js";import{g as M}from"./zIndexSlice-Bx385Wu5.js";import{C as R}from"./CartesianGrid-C0VQBDvF.js";import{X as $}from"./XAxis-DyhIsrPh.js";import{Y as I}from"./YAxis-C_fkHFUI.js";import{L as O}from"./Legend-D3iuJ925.js";import{T as W}from"./Tooltip-DUzLPYEr.js";import{L as C}from"./Line-CAf-fyij.js";import{C as X}from"./Curve-C4CaZCwE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BBHPk0wF.js";import"./resolveDefaultProps-C_CQ9UBc.js";import"./RechartsWrapper-DsTdodcN.js";import"./index-CxwbJNHI.js";import"./index-kO-m-NHC.js";import"./index-DUKnKSji.js";import"./index-6by7EgtV.js";import"./immer-CNH0Qykv.js";import"./renderedTicksSlice-CAWK7f2V.js";import"./axisSelectors-C3VexB3f.js";import"./d3-scale-COdDGNPP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cl4arGk4.js";import"./chartDataContext-DIHsMymB.js";import"./CategoricalChart-im9vFRI0.js";import"./CartesianAxis-BygLm6pY.js";import"./Layer-BPFmWcLz.js";import"./Text-B5Z71jGK.js";import"./DOMUtils-CBs1V0PN.js";import"./Label-madSHGhS.js";import"./ZIndexLayer-CX9fDFPC.js";import"./types-CDVpgISI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-FaOp8ptw.js";import"./symbol-Cpj73b5m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHtU9LZv.js";import"./uniqBy-CxmJpd9c.js";import"./iteratee-DGXMHyCR.js";import"./useAnimationId-wbWpU06B.js";import"./Cross-JclV0vmp.js";import"./Rectangle-BMeCNBC5.js";import"./Sector-BdKYeoRV.js";import"./ReactUtils-BfQpQwdE.js";import"./ActivePoints-mSOk-v2V.js";import"./Dot-Ci7H-Wks.js";import"./RegisterGraphicalItemId-Cyx6k34u.js";import"./ErrorBarContext-3J6T58S3.js";import"./GraphicalItemClipPath-CXNX3kTP.js";import"./SetGraphicalItem-BsEDaVAo.js";import"./getRadiusAndStrokeWidthFromDot-CxfGK76v.js";import"./ActiveShapeUtils-cdOmSqYT.js";import"./step-BUy109CO.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(M,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(R,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Bt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Bt as __namedExportsOrder,Gt as default};
