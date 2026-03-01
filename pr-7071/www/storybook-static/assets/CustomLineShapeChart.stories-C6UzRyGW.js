import{e as t}from"./iframe-DKyU_iXE.js";import{R as D,i as s}from"./arrayEqualityCheck-CBuQt-LQ.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CVm8qDNA.js";import{C as K}from"./CartesianGrid-COdiZEbw.js";import{X as T}from"./XAxis-4nisg1uZ.js";import{Y as M}from"./YAxis-C-bpHLVI.js";import{L as $}from"./Legend-DUZ9Bze5.js";import{T as O}from"./Tooltip-B6eIiGzO.js";import{L as C}from"./Line-Cn5FvcMW.js";import{R as W}from"./RechartsHookInspector-Dv9I4YHQ.js";import{C as X}from"./Curve-CExLt2Iv.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cUmGB5BP.js";import"./immer-CaNK2Wnd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1k7PNNo.js";import"./index-Bc9uivsf.js";import"./hooks-CcwQQS4K.js";import"./axisSelectors-CdP5XGoN.js";import"./d3-scale-frJU2Btm.js";import"./zIndexSlice-w00ysM4m.js";import"./renderedTicksSlice-CWpXf5qL.js";import"./CartesianChart-DR1aPl1R.js";import"./chartDataContext-B1YWbHj7.js";import"./CategoricalChart-BzovAk5i.js";import"./CartesianAxis-D-Yy--uR.js";import"./Layer--fTJnsnP.js";import"./Text-D31e4mTY.js";import"./DOMUtils-BSHfgs8I.js";import"./Label-kMa1V762.js";import"./ZIndexLayer-6WeTgCgn.js";import"./types-DZPKaEAC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-0HhL3rnr.js";import"./symbol-CXDVJGuj.js";import"./step-DMWIYdYk.js";import"./useElementOffset-WeTLfDYP.js";import"./uniqBy-DGPRmWwo.js";import"./iteratee-BYRcrczO.js";import"./useAnimationId-De9-pIXx.js";import"./Cross-BrkqKj1z.js";import"./Rectangle-CFv_pW3l.js";import"./Sector-dJduajY3.js";import"./ReactUtils-CiNFkB-2.js";import"./ActivePoints-sa10AzyA.js";import"./Dot-CKbtf96r.js";import"./RegisterGraphicalItemId-BtuRgDxJ.js";import"./ErrorBarContext-BwvMd7Q8.js";import"./GraphicalItemClipPath-f-LT7H0l.js";import"./SetGraphicalItem-geCsQwmc.js";import"./getRadiusAndStrokeWidthFromDot-DnCZvFUa.js";import"./ActiveShapeUtils-BhHFALxr.js";import"./isPlainObject-ClBz4bnQ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CI4993jy.js";import"./index-CAiBL-v8.js";import"./ChartSizeDimensions-BOJu1RXr.js";import"./OffsetShower-CJI2DXcR.js";import"./PlotAreaShower-Bq5ePm5q.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
