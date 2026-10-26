import{R as t}from"./iframe-DQVzMSYD.js";import{R as D,m as p}from"./zIndexSlice-COaPk7HG.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CRfJPSts.js";import{C as M}from"./CartesianGrid-D6V-fHLA.js";import{X as $}from"./XAxis-EcPa3Cb-.js";import{Y as I}from"./YAxis-C77qq_aV.js";import{L as O}from"./Legend-DU-_KOMG.js";import{T as W}from"./Tooltip-DY53DxeQ.js";import{L as f}from"./Line-D2xiXoDa.js";import{C as X}from"./Curve-Bt3n70L8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B_q_xmSS.js";import"./throttle-RO9RTr3r.js";import"./index-BwLkx-9j.js";import"./index-E8O3UkuU.js";import"./RechartsWrapper-C-LDIUUV.js";import"./axisSelectors-D2aZ2Nk7.js";import"./polarAxisSelectors-BSp_MBDw.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CB3Nn2aV.js";import"./index-mH-U0iC2.js";import"./index-BedQbpOM.js";import"./renderedTicksSlice-h-EAnLPI.js";import"./index-eU6OKF0g.js";import"./CartesianChart-DUEad30c.js";import"./chartDataContext-FD6VhEJQ.js";import"./CategoricalChart-Doih-QNH.js";import"./CartesianAxis-D4euaSSo.js";import"./Layer-Bj9bz4HQ.js";import"./Text-CPLLX1IN.js";import"./pageBackground-Bn8h5x5L.js";import"./useId-DXg-zq7I.js";import"./ZIndexLayer-BnIZToy7.js";import"./Label-D0zJX0d_.js";import"./dataEntryStyles-CJ67-Ft7.js";import"./types-DP1nwDJM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CiPXHPgW.js";import"./symbol-C1jDOFfw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DyUzreY7.js";import"./uniqBy-BJn9ALDR.js";import"./iteratee-BPCNyx3w.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BChg9XFS.js";import"./Cross-DyQZyHKO.js";import"./Rectangle-BkBeu2DV.js";import"./util-Dxo8gN5i.js";import"./Sector-ssOD9QbL.js";import"./activeStyles-BOapb_qi.js";import"./ActivePoints-rQZSXr73.js";import"./Dot-BkzLITlZ.js";import"./RegisterGraphicalItemId-B0YbUPXE.js";import"./ErrorBarContext-CI8iDnvM.js";import"./SetGraphicalItem-DFlRgyvC.js";import"./getRadiusAndStrokeWidthFromDot-C00hbLzP.js";import"./ActiveShapeUtils-Cp3IBj9J.js";import"./useEffectiveDataKey-CkAzTA5N.js";import"./step-BQC9MPym.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
