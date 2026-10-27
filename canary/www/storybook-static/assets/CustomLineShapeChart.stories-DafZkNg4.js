import{R as t}from"./iframe-FAdFbT6J.js";import{R as D,m as p}from"./zIndexSlice-COO8R9lj.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BV_0i815.js";import{C as M}from"./CartesianGrid-H4vGAjA9.js";import{X as $}from"./XAxis-2xPTd-UO.js";import{Y as I}from"./YAxis-T_mO5jU8.js";import{L as O}from"./Legend-vCTZRYiE.js";import{T as W}from"./Tooltip-CRq_rlzM.js";import{L as f}from"./Line-jyNZb6sa.js";import{C as X}from"./Curve-DQIDgvYs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./throttle-DmbGe_oo.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./RechartsWrapper-B8CA35TH.js";import"./axisSelectors-DjwIFZga.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfdNPJMp.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./CartesianAxis-_1uLVGpU.js";import"./Layer-DDi6JECL.js";import"./Text-Cndhy6VG.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./Label-MEQSQEMP.js";import"./dataEntryStyles-CEjpbRUj.js";import"./types-BX8ZQcvG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DFQxEPmi.js";import"./symbol-BlNnJRbB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CTPpQQlY.js";import"./uniqBy-CNFPVLtL.js";import"./iteratee-DmPtyNGM.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CiJHzCVR.js";import"./Cross-DtcmFape.js";import"./Rectangle-BbbHCzWy.js";import"./util-Dxo8gN5i.js";import"./Sector-Dj1vgMvZ.js";import"./LabelList-BYdzk1TZ.js";import"./ActivePoints-NvUWdQPY.js";import"./Dot-CvQhsRdk.js";import"./activeStyles-D7U9MU9g.js";import"./RegisterGraphicalItemId-DlZGROHe.js";import"./ErrorBarContext-C30p0TOk.js";import"./SetGraphicalItem-CbZ_Osbr.js";import"./getRadiusAndStrokeWidthFromDot-BJ55Ryxa.js";import"./ActiveShapeUtils-CppGq9PY.js";import"./useEffectiveDataKey-DTWxfT2D.js";import"./step-DTM-27zI.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
