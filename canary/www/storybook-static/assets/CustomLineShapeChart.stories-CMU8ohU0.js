import{R as t}from"./iframe-DLBrGVIL.js";import{R as D,l as p}from"./zIndexSlice-D04f94zz.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DrpiW0cV.js";import{C as M}from"./CartesianGrid-5zdG2eL_.js";import{X as $}from"./XAxis-CeLc4bEQ.js";import{Y as I}from"./YAxis-BYVuK0Yz.js";import{L as O}from"./Legend-rYKJOgHs.js";import{T as W}from"./Tooltip-D6tNJons.js";import{L as f}from"./Line-Dp11xR-K.js";import{C as X}from"./Curve-COZ7WQ5e.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCNaX0Un.js";import"./get-CjriyByo.js";import"./throttle-Csq4RHLA.js";import"./index-B7CtExx5.js";import"./index-DQTJ-3mG.js";import"./RechartsWrapper-CQD9R6Ch.js";import"./axisSelectors-e5FgB8sH.js";import"./polarAxisSelectors-5dY8QunD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7f23rgt.js";import"./index-wzkov3Za.js";import"./index-C5Iik6-v.js";import"./renderedTicksSlice-C3k9zhPb.js";import"./index-71o-Y0_J.js";import"./fillDefinitions-3l2D0OPm.js";import"./CartesianChart-DqjyD4mn.js";import"./chartDataContext-Xl7iaHZA.js";import"./CategoricalChart-D7HNeFeV.js";import"./CartesianAxis-DwNRBXKt.js";import"./Layer-fmxJ3YOZ.js";import"./Text-3dSBCvrE.js";import"./ZIndexLayer-R8fInGM9.js";import"./Label-B42eZj7W.js";import"./types-Bhx-lAgy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CwwyfWDy.js";import"./symbol-CTUGUG7K.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CivVGgp9.js";import"./uniqBy-ConzCxl5.js";import"./iteratee-BL4ehpYl.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-UzUbsW_e.js";import"./Cross-DEEEtc7e.js";import"./Rectangle-BfcJPzvH.js";import"./util-Dxo8gN5i.js";import"./Sector-CHWFKDEu.js";import"./getRadiusAndStrokeWidthFromDot-XT9ud7Ex.js";import"./dataEntryStyles-C-aMudj3.js";import"./ActivePoints-9q7wkDTC.js";import"./Dot-DOIYCHL9.js";import"./activeStyles-DixW-39S.js";import"./ErrorBarContext-5vBRFIsn.js";import"./SetGraphicalItem-mnwtfu-X.js";import"./ActiveShapeUtils-BggRH-Y1.js";import"./useEffectiveDataKey-CzXzkxYB.js";import"./step-Rw1feLL3.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
