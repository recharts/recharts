import{R as t}from"./iframe-S_Q04LyU.js";import{i as p}from"./isWellBehavedNumber-B7JVG4WI.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DzYjjA-7.js";import{R as T}from"./zIndexSlice-Bxg2BBQ3.js";import{C as M}from"./CartesianGrid-HgE65v3j.js";import{X as $}from"./XAxis-D78GJHE5.js";import{Y as I}from"./YAxis-Cd8RwLuY.js";import{L as O}from"./Legend-BAFGOlgK.js";import{T as W}from"./Tooltip-DnzE8zYC.js";import{L as C}from"./Line-BOxz-rUw.js";import{C as X}from"./Curve-By1OgGZW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dy-13YZo.js";import"./RechartsWrapper-DllIXhjL.js";import"./index-rMJKouwD.js";import"./index-TooQEcPQ.js";import"./index-B7fnCzo3.js";import"./index-bxbAArpl.js";import"./throttle-sJ5Xwj7N.js";import"./renderedTicksSlice-xSk0hPIv.js";import"./axisSelectors-BPn6DSnk.js";import"./d3-scale-C2cmQNtP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKdvFgR6.js";import"./chartDataContext-pLCds2Ae.js";import"./CategoricalChart-90tJb_l9.js";import"./CartesianAxis-DhttszFl.js";import"./Layer-gdhaFlzY.js";import"./Text-C30Me8vu.js";import"./DOMUtils-b86ja7SN.js";import"./Label-DpgEyudD.js";import"./ZIndexLayer-Cyu3q_2t.js";import"./types-B2JQaABL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-B-Gfn4AE.js";import"./symbol-BVP44yda.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DsJA345U.js";import"./uniqBy-BtJ9oYS7.js";import"./iteratee-DpqljlNu.js";import"./useAnimationId-CWYmV7EH.js";import"./Cross-CwJEmN7U.js";import"./Rectangle-Qt7Z3o8D.js";import"./util-Dxo8gN5i.js";import"./Sector-BeHgqQjL.js";import"./AnimatedItems-BE3OLqfb.js";import"./ActivePoints-D50UgDCx.js";import"./Dot-D891HGOH.js";import"./RegisterGraphicalItemId-C_r44y5X.js";import"./ErrorBarContext-TTmfdmNR.js";import"./GraphicalItemClipPath-BhFzIWrz.js";import"./SetGraphicalItem-CmPnocAL.js";import"./getRadiusAndStrokeWidthFromDot-CwsW4Xpc.js";import"./ActiveShapeUtils-CQj2Q4HD.js";import"./step-DWBBqdOb.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
