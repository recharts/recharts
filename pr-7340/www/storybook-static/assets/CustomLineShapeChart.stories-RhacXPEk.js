import{e as t}from"./iframe-CVCS2awI.js";import{g as R,I as s}from"./arrayEqualityCheck-BScHcl7E.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-gk_21NPw.js";import{C as T}from"./CartesianGrid-Di5zgPXB.js";import{X as M}from"./XAxis-DEoN5sn7.js";import{Y as $}from"./YAxis-ofBsFmOO.js";import{L as O}from"./Legend-CcKK5dE7.js";import{T as W}from"./Tooltip-d7WOHUx5.js";import{L as C}from"./Line-KS6zX881.js";import{R as X}from"./RechartsHookInspector-3dEt4e8Z.js";import{C as Y}from"./Curve-CrfOdonX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ByXJQ66f.js";import"./immer-BGDSirDa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYjkcUu.js";import"./index-DBY1MSkk.js";import"./hooks-DdU_FuUR.js";import"./axisSelectors-Ci1MJvZY.js";import"./d3-scale-BXP4l8lb.js";import"./zIndexSlice-CYiE3KZh.js";import"./renderedTicksSlice-DEe4uQXq.js";import"./CartesianChart-g3EB1H8Z.js";import"./chartDataContext-CE4uM-kC.js";import"./CategoricalChart-DjXgWEwo.js";import"./CartesianAxis-PbPLy1Ao.js";import"./Layer-ByxoiXYR.js";import"./Text-CDmz-7H5.js";import"./DOMUtils-DM2Mtfvr.js";import"./Label-DaKOoJ3c.js";import"./ZIndexLayer-qvuGpwS0.js";import"./types-Dgqt75FW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dz4m2MlL.js";import"./symbol-DdzOPpJh.js";import"./step-3E9Doowe.js";import"./useElementOffset-CI8CiQoP.js";import"./uniqBy-Bxp-pBrY.js";import"./iteratee-CHH-nYCc.js";import"./useAnimationId-B8F28VZa.js";import"./Cross-MuHqrs7m.js";import"./Rectangle-DLDHpE0T.js";import"./Sector-C1cGt--Q.js";import"./ReactUtils-rjXWPyV6.js";import"./ActivePoints-hZ66QtRZ.js";import"./Dot-BYrokBNa.js";import"./RegisterGraphicalItemId-DdbYzmem.js";import"./ErrorBarContext-DiMABLnG.js";import"./GraphicalItemClipPath-_oXfIigP.js";import"./SetGraphicalItem-2oqi_YeH.js";import"./getRadiusAndStrokeWidthFromDot-l3MHvEmn.js";import"./ActiveShapeUtils-B0Gi97Qx.js";import"./isPlainObject-C1Vy2OK5.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Drv7mFxs.js";import"./index-D6BiGzwv.js";import"./ChartSizeDimensions-Cz6I6g2_.js";import"./OffsetShower-mSbEp68m.js";import"./PlotAreaShower-Bh-nVQY_.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,I=Math.abs(Math.floor(e/h-1)),P=e/I;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(R,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
