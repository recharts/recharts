import{e as t}from"./iframe-DOwSMESw.js";import{R as D,i as s}from"./arrayEqualityCheck-CX9-bfYH.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DJi7Lm07.js";import{C as K}from"./CartesianGrid-DEbxUIAb.js";import{X as T}from"./XAxis-BPbWU4yR.js";import{Y as M}from"./YAxis-DIarP6QG.js";import{L as $}from"./Legend-D_NaL7mR.js";import{T as O}from"./Tooltip-49ah_KvT.js";import{L as C}from"./Line-BMz_1-bi.js";import{R as W}from"./RechartsHookInspector-CcCJcHZ5.js";import{C as X}from"./Curve-HyoTL5em.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./immer-ZyDpTiiy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ls6tVJyv.js";import"./index-BBfb_97C.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./CartesianAxis-BJnnwpTK.js";import"./Layer-Dw0puBgf.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./Label-CGJJW7mt.js";import"./ZIndexLayer-Dk3cu7q_.js";import"./types-BVuvkN0T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Vm2a1c-r.js";import"./symbol-5SXgtl89.js";import"./step-CPI5XPf7.js";import"./useElementOffset-CFSq58AV.js";import"./uniqBy-ByHGQN-F.js";import"./iteratee-DHfnXdiR.js";import"./useAnimationId-B99eNrnj.js";import"./Cross-D1qFAUvf.js";import"./Rectangle-CMknbwVL.js";import"./Sector-BzLVEcjl.js";import"./ReactUtils-D4p-v0tr.js";import"./ActivePoints-Bwmmy_Xm.js";import"./Dot-aBSUYWpk.js";import"./RegisterGraphicalItemId-BYUuyceh.js";import"./ErrorBarContext-CtE8_zM3.js";import"./GraphicalItemClipPath-CYCx10_G.js";import"./SetGraphicalItem-CB9uDBjU.js";import"./getRadiusAndStrokeWidthFromDot-BkGX9HE7.js";import"./ActiveShapeUtils-C94C_QYl.js";import"./isPlainObject-sPJsBjkd.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-AfdP-1uh.js";import"./index-aBvahWCN.js";import"./ChartSizeDimensions-BCHrYjTL.js";import"./OffsetShower-DAQHvvGL.js";import"./PlotAreaShower-CtS1URyh.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
