import{e as t}from"./iframe-CW44RDCc.js";import{g as R,I as s}from"./arrayEqualityCheck-Ua4xjAL-.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-B0PpJA2W.js";import{C as T}from"./CartesianGrid-xF5Cq0CK.js";import{X as M}from"./XAxis-BtxpyVu0.js";import{Y as $}from"./YAxis-DkqaPkGp.js";import{L as O}from"./Legend-e-pfRx1K.js";import{T as W}from"./Tooltip-CQcTPDPp.js";import{L as C}from"./Line-Cq678OID.js";import{R as X}from"./RechartsHookInspector-CE02yOZG.js";import{C as Y}from"./Curve-OVW22O2P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DCGYFD7i.js";import"./immer-XdRVX9he.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3a2SuVp.js";import"./index-q0MlqJm9.js";import"./hooks-PNvgBz41.js";import"./axisSelectors-CKeyOf07.js";import"./d3-scale-BVNpQg4a.js";import"./zIndexSlice-B0Fs0Bds.js";import"./renderedTicksSlice-m2ISnyyr.js";import"./CartesianChart-CTskZI97.js";import"./chartDataContext-BIpjCG9Z.js";import"./CategoricalChart-BSsRNKhV.js";import"./CartesianAxis-BktLkXzl.js";import"./Layer-8Qf7pjam.js";import"./Text-B0bhoYGy.js";import"./DOMUtils-DcGI1ooU.js";import"./Label-CB32eiK0.js";import"./ZIndexLayer-DOf301bL.js";import"./types-B4uBrmm7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DPIxRI8N.js";import"./symbol-DbqMCeb2.js";import"./step-_iQ5Op8T.js";import"./useElementOffset-o3Roob9z.js";import"./uniqBy-p3yfjzxe.js";import"./iteratee-C366JI6E.js";import"./useAnimationId-DAlITmll.js";import"./Cross-DzegyrDh.js";import"./Rectangle-Chq6EJDX.js";import"./Sector-CwAajl9S.js";import"./ReactUtils-D_YL06Q3.js";import"./ActivePoints-CzNqaTiV.js";import"./Dot-CJ1Gpj_u.js";import"./RegisterGraphicalItemId-C2nT64rB.js";import"./ErrorBarContext-CTE9_ggH.js";import"./GraphicalItemClipPath-2q24bU0-.js";import"./SetGraphicalItem--ChXDLvH.js";import"./getRadiusAndStrokeWidthFromDot-BIUpFF8r.js";import"./ActiveShapeUtils-Sw9eCZBU.js";import"./isPlainObject-B7SWhIBJ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CMZodTaL.js";import"./index-at3I6h66.js";import"./ChartSizeDimensions-O4pbDmZW.js";import"./OffsetShower-CmBjVyZD.js";import"./PlotAreaShower-9R2kP3z1.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,I=Math.abs(Math.floor(e/h-1)),P=e/I;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(R,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
