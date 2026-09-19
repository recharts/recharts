import{R as t}from"./iframe-CiEll_hl.js";import{a as p}from"./isWellBehavedNumber-ry_onT8i.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BLTTwq0E.js";import{R as T}from"./zIndexSlice-BWUZw0HV.js";import{C as M}from"./CartesianGrid-Bs8ZX4h4.js";import{X as $}from"./XAxis-BecTjeSU.js";import{Y as I}from"./YAxis-veNA_t3h.js";import{L as O}from"./Legend-Uo7plN5O.js";import{T as W}from"./Tooltip-DCP_zXab.js";import{L as C}from"./Line-Dp0tH0hq.js";import{C as X}from"./Curve-bnxtETge.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-duavw9Kl.js";import"./RechartsWrapper-8qI1d7ig.js";import"./axisSelectors-Czhrsmz1.js";import"./throttle-D31XxRNM.js";import"./index-C6gwqJSk.js";import"./index-CWa27twE.js";import"./d3-scale-CoahAzwi.js";import"./index-DPEbYR3l.js";import"./index-d_0OIgID.js";import"./renderedTicksSlice-CDeLucdV.js";import"./index-RfC6TSb7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YzLYuA0Z.js";import"./chartDataContext-A6K28S5n.js";import"./CategoricalChart-yzrwRYbH.js";import"./CartesianAxis-Cv1crkEc.js";import"./Layer-Bl66F1TU.js";import"./Text-C5G8lazz.js";import"./DOMUtils-HtrcCiap.js";import"./useId-BF2rDIp_.js";import"./useBackwardsCompatibleTheme-B38ON0Kc.js";import"./Label-2sILoPl9.js";import"./ZIndexLayer-DOTS06hC.js";import"./types-MiZov7mG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-WUygGVJ4.js";import"./symbol-BVUZRMIr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CAsd9Skh.js";import"./uniqBy-CYyDJIfO.js";import"./iteratee-hWILKxtV.js";import"./useAnimationId-DB2VCJ-C.js";import"./Cross-C_JPqmaw.js";import"./Rectangle-BFCB6ihn.js";import"./util-Dxo8gN5i.js";import"./Sector-BAfGjF5d.js";import"./AnimatedItems-ABeUxSrb.js";import"./ActivePoints-Dc8U7ztD.js";import"./Dot-D6RGfzzu.js";import"./RegisterGraphicalItemId-V_3RkT2Z.js";import"./ErrorBarContext-DFolGKyI.js";import"./GraphicalItemClipPath-CNKUlu4p.js";import"./SetGraphicalItem-BGxIGAFZ.js";import"./getRadiusAndStrokeWidthFromDot-IdnOPtwR.js";import"./ActiveShapeUtils-CIEveTom.js";import"./useGraphicalItemIdentity-DPacc47z.js";import"./step-CMCW6W2-.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
