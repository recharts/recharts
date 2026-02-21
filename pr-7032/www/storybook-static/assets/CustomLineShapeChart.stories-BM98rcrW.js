import{e as t}from"./iframe-_bxOXoO9.js";import{R as D,i as s}from"./arrayEqualityCheck-B7kPjOe4.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CnMGQpU6.js";import{C as K}from"./CartesianGrid-CccUh1NJ.js";import{X as T}from"./XAxis-B25iHqjD.js";import{Y as M}from"./YAxis-A1NUb23w.js";import{L as $}from"./Legend-pNDEwUrT.js";import{T as O}from"./Tooltip-BzA3BQUp.js";import{L as C}from"./Line-CEP2Y-ve.js";import{R as W}from"./RechartsHookInspector-CQ4RIQ5B.js";import{C as X}from"./Curve-lVDO4rto.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D0m7DKS7.js";import"./immer-4xgaWIU1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CLtRnOh5.js";import"./index-BFgxmFq6.js";import"./hooks-Cyo7uYKI.js";import"./axisSelectors-BABYG139.js";import"./d3-scale-CMcXs8cL.js";import"./zIndexSlice-YmRlXVtY.js";import"./renderedTicksSlice-BhRx_d4S.js";import"./CartesianChart-BeL_fJ-U.js";import"./chartDataContext-CdQCRTNV.js";import"./CategoricalChart-5uJ4ezdK.js";import"./CartesianAxis-B0aXIuqq.js";import"./Layer-B4OQX5mX.js";import"./Text-BcYFtKsN.js";import"./DOMUtils-MxvGotSE.js";import"./Label-puZUAwbJ.js";import"./ZIndexLayer-B8XFMXb9.js";import"./types-CaD-AAbb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DC5bGOMu.js";import"./symbol-B3FMMLJa.js";import"./step-eq8OAlUh.js";import"./useElementOffset-BbjKpyX7.js";import"./uniqBy-LNZ8xow_.js";import"./iteratee-CNg37eQk.js";import"./useAnimationId-CniUVvXd.js";import"./Cross-CpjIss2W.js";import"./Rectangle-BaX2mvZh.js";import"./Sector-Dr45uA-k.js";import"./ReactUtils-BFPf_n2z.js";import"./ActivePoints-C_CIVq-A.js";import"./Dot-CDhDmUCL.js";import"./RegisterGraphicalItemId-CTB49Iya.js";import"./ErrorBarContext-3ohsNMPc.js";import"./GraphicalItemClipPath-5qnulUvK.js";import"./SetGraphicalItem-BJ4aCabI.js";import"./getRadiusAndStrokeWidthFromDot-ZajgNGGY.js";import"./ActiveShapeUtils-DYBOuNOh.js";import"./isPlainObject-NBybHA4D.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-D0RHyHyZ.js";import"./index-D6dEx3op.js";import"./ChartSizeDimensions-DiDEOzCF.js";import"./OffsetShower-DtnIakTn.js";import"./PlotAreaShower-BaYMr28N.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
