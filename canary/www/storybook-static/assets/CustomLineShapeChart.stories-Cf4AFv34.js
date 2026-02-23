import{e as t}from"./iframe-DDI_DJJN.js";import{R as D,i as s}from"./arrayEqualityCheck-hZTzDH-w.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CZeprwxM.js";import{C as K}from"./CartesianGrid-djPL6F_S.js";import{X as T}from"./XAxis-CyGjCDT7.js";import{Y as M}from"./YAxis-8PQWMae8.js";import{L as $}from"./Legend-cPk-W-Qb.js";import{T as O}from"./Tooltip-DFMG04Ze.js";import{L as C}from"./Line-30ftzad6.js";import{R as W}from"./RechartsHookInspector-C3V8sbCd.js";import{C as X}from"./Curve-CV9593Ht.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CLbNKqYx.js";import"./immer-Brsuo9bJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMJyf-Ro.js";import"./index-Cy1m0pGF.js";import"./hooks-wL8R-wOE.js";import"./axisSelectors-ChmA7UB1.js";import"./d3-scale-C1aLw3GY.js";import"./zIndexSlice-DxTiX0Vg.js";import"./renderedTicksSlice-CdTaSuMU.js";import"./CartesianChart-0fUn6gYr.js";import"./chartDataContext-D_5cMEe0.js";import"./CategoricalChart-lTFMLhnQ.js";import"./CartesianAxis-FKnuWFmP.js";import"./Layer-CIeq28iC.js";import"./Text-lRH21Xfn.js";import"./DOMUtils-CSAlYQMj.js";import"./Label-CGfHxLGm.js";import"./ZIndexLayer-NEFv0ypW.js";import"./types-3HOHeyG7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cb1Mvpcy.js";import"./symbol-BbtwQcdi.js";import"./step-8724oeyl.js";import"./useElementOffset-NLLhNf0a.js";import"./uniqBy-B1FZNgBB.js";import"./iteratee-KngSqfTZ.js";import"./useAnimationId-CexGYFUY.js";import"./Cross-CRzoJyP_.js";import"./Rectangle-DYHIra0M.js";import"./Sector-BD9d8CEy.js";import"./ReactUtils-BsJAl1au.js";import"./ActivePoints-0YQSYC1d.js";import"./Dot-CPC0L5kt.js";import"./RegisterGraphicalItemId-CcKibD6X.js";import"./ErrorBarContext-CWlsK-qh.js";import"./GraphicalItemClipPath-BeQVZHHf.js";import"./SetGraphicalItem-D9woa3Pp.js";import"./getRadiusAndStrokeWidthFromDot-BkaUjW92.js";import"./ActiveShapeUtils-TXeo_kM0.js";import"./isPlainObject-DQmMsT9g.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CCG-1NIc.js";import"./index-iQmKaGYo.js";import"./ChartSizeDimensions-BQ24u2Cw.js";import"./OffsetShower-BVATxvoJ.js";import"./PlotAreaShower-uC34L_bk.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
