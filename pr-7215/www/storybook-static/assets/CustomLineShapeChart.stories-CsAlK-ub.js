import{e as t}from"./iframe-BziMfoUa.js";import{g as R,I as s}from"./arrayEqualityCheck-jGW3YXEm.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-COOOc3-d.js";import{C as T}from"./CartesianGrid-Bxirurkp.js";import{X as M}from"./XAxis-zue1oO_9.js";import{Y as $}from"./YAxis-Cam7yyHt.js";import{L as O}from"./Legend-BwCO8fx1.js";import{T as W}from"./Tooltip-CeGSFROX.js";import{L as C}from"./Line-BS-_K6SJ.js";import{R as X}from"./RechartsHookInspector-C7iBq9Tv.js";import{C as Y}from"./Curve-CBntFit6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqM-Yvij.js";import"./immer-Bs1CBStC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Duw6h7Bm.js";import"./index-BIuRyLTB.js";import"./hooks-_tZAqQmm.js";import"./axisSelectors-CAcjMuVN.js";import"./d3-scale-GlbhO23R.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-lEo1dtRN.js";import"./renderedTicksSlice-v3j9k7Mr.js";import"./CartesianChart-Cq-jUzWL.js";import"./chartDataContext-Cp7Sw1KM.js";import"./CategoricalChart-BjhCCKH7.js";import"./CartesianAxis-CBXn4WUR.js";import"./Layer-CoMuIaZe.js";import"./Text-fxmSEe5L.js";import"./DOMUtils-c_Zm-hwi.js";import"./Label-Qwg870Bc.js";import"./ZIndexLayer-CIYsspBg.js";import"./types-CX5BQ__A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DXSNT6Hm.js";import"./symbol-DOCk2oSo.js";import"./step-CeZV8hny.js";import"./useElementOffset-YOdnAUzF.js";import"./uniqBy-BJTGISYF.js";import"./iteratee-TU5TWMO2.js";import"./useAnimationId-kTU4vPRt.js";import"./Cross-BWYk3muo.js";import"./Rectangle-Cqckp2nr.js";import"./Sector-Gm8VToLD.js";import"./AnimatedItems-BBuXONSK.js";import"./ActivePoints-C6-CaXlM.js";import"./Dot-3fkMyAwB.js";import"./RegisterGraphicalItemId-BtgM2BJV.js";import"./ErrorBarContext-TCqeYJoC.js";import"./GraphicalItemClipPath-CUoKAv3d.js";import"./SetGraphicalItem-DsxyvyCs.js";import"./getRadiusAndStrokeWidthFromDot-Co7Fg86a.js";import"./ActiveShapeUtils-BFwVaQU9.js";import"./isPlainObject-DmPDszQ3.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-m2Wlm-zm.js";import"./index-Cu69lm6g.js";import"./ChartSizeDimensions-DfprWSX6.js";import"./OffsetShower-Cr3DxjzZ.js";import"./PlotAreaShower-OmwxkN4u.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,I=Math.abs(Math.floor(e/h-1)),P=e/I;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(R,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ut=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
