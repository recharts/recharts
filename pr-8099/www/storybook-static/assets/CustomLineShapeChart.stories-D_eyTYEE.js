import{R as t}from"./iframe-tjocxRUU.js";import{R as D,m as p}from"./zIndexSlice-Dxy8HPki.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BZ4q9848.js";import{C as M}from"./CartesianGrid-yix9J2Ta.js";import{X as $}from"./XAxis-Ds3HH0B9.js";import{Y as I}from"./YAxis-CC3Fea7J.js";import{L as O}from"./Legend-A6gk-x0n.js";import{T as W}from"./Tooltip-Vo_i0ifx.js";import{L as f}from"./Line-D_gGwljF.js";import{C as X}from"./Curve-D8fqT8cR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BcfnasjV.js";import"./throttle-BtJBXhY8.js";import"./index-CjBb-5aG.js";import"./index-cbjgkIoT.js";import"./RechartsWrapper-CFmoW3Jf.js";import"./axisSelectors-Bh1ZEFRN.js";import"./polarAxisSelectors-D1WllP0e.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DxsTJ-Fh.js";import"./index-Ccuv5XKu.js";import"./index-Ct8BdbUc.js";import"./renderedTicksSlice-Dd6HrSiu.js";import"./index-E7H9Mo8F.js";import"./CartesianChart-BvDUjaEm.js";import"./ZIndexPortal-HUDzz5Yk.js";import"./CategoricalChart-BwEKGQoK.js";import"./CartesianAxis-DzErZjsk.js";import"./Layer-YyRceVq5.js";import"./Text-DmRL3-09.js";import"./pageBackground-C5tWOGC0.js";import"./ZIndexLayer-1nCesNvZ.js";import"./Label-CDvz32IL.js";import"./dataEntryStyles-D26LCbZx.js";import"./types-C53JcC0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-eM89l6Zr.js";import"./symbol-aequuKRH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cwd9kaUJ.js";import"./uniqBy-CCosKpyN.js";import"./iteratee-BVYnyUcL.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-g7Nwbj-R.js";import"./Cross-A6Z2fQ3g.js";import"./Rectangle-nUsjOQfN.js";import"./util-Dxo8gN5i.js";import"./Sector-B1OZU1uB.js";import"./LabelList-C2EwX980.js";import"./ActivePoints-CR8eCzMX.js";import"./Dot-C1-AWakF.js";import"./activeStyles-BO5quCC2.js";import"./RegisterGraphicalItemId-B4AeGnTP.js";import"./ErrorBarContext-ClXwNuC-.js";import"./SetGraphicalItem-CJ8TRMDr.js";import"./getRadiusAndStrokeWidthFromDot-wnLtIjnO.js";import"./ActiveShapeUtils-BbQcFRH2.js";import"./useEffectiveDataKey-BAWm_Xnd.js";import"./step-BxgewTFX.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
