import{R as t}from"./iframe-DfQVKpWf.js";import{R as D,l as p}from"./zIndexSlice-BRoA5zbQ.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DMys1rqY.js";import{C as M}from"./CartesianGrid-Bl5PtFny.js";import{X as $}from"./XAxis--NVg5Wna.js";import{Y as I}from"./YAxis-DMHv-5gA.js";import{L as O}from"./Legend-BMaSAhX7.js";import{T as W}from"./Tooltip-B1Qmb97M.js";import{L as f}from"./Line-DBhsIsTX.js";import{C as X}from"./Curve-BjBiMZvK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRVZcbQl.js";import"./throttle-D0VENALV.js";import"./index-DLkRf9Xs.js";import"./index-Da3zhQui.js";import"./RechartsWrapper-CbT_vqZg.js";import"./axisSelectors-nkYWEth-.js";import"./polarAxisSelectors-DE4p4RgX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC9kPgul.js";import"./index-CLjBtDbF.js";import"./index-C3Wo1ixX.js";import"./renderedTicksSlice-COJW81My.js";import"./index-oM5BRh82.js";import"./fillDefinitions-DMhv-djT.js";import"./CartesianChart-BO_j1rd7.js";import"./ZIndexPortal-BgZ3mdtq.js";import"./CategoricalChart-CIbxz_h2.js";import"./CartesianAxis-bSSjBH_Z.js";import"./Layer-Dxd39IZi.js";import"./Text-BguVyW-T.js";import"./DOMUtils-D9csGiWV.js";import"./ZIndexLayer-iHHFBTZW.js";import"./Label-Dx4XJGMM.js";import"./types-B0IgcrJR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C8CspVgJ.js";import"./symbol-D5X2owC8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_4NA5oF.js";import"./uniqBy-Bvv0pG38.js";import"./iteratee-Dj2GE6VN.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Co3_Oxtg.js";import"./Cross-Bmjz-AQU.js";import"./Rectangle-Dho5taUB.js";import"./util-Dxo8gN5i.js";import"./Sector-DCqZBsHb.js";import"./LabelList-BjeX7Zh8.js";import"./ActivePoints-BKczNKsQ.js";import"./Dot-BJaFOnh2.js";import"./activeStyles-BlB0_IoV.js";import"./dataEntryStyles-pydJZJI0.js";import"./ErrorBarContext-DMnuYRqA.js";import"./SetGraphicalItem-24_y6SOu.js";import"./getRadiusAndStrokeWidthFromDot-BVeK6Pqm.js";import"./ActiveShapeUtils-Dij93_Oc.js";import"./useEffectiveDataKey-BuvFv_YU.js";import"./step-BYgu61ra.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
