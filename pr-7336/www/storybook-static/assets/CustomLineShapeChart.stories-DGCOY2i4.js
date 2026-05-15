import{e as t}from"./iframe-C_AsYugi.js";import{R as D,i as s}from"./arrayEqualityCheck-xvllERIt.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CMJ8BpeZ.js";import{C as T}from"./CartesianGrid-BCBuz4XX.js";import{X as M}from"./XAxis-DH_rN-kM.js";import{Y as $}from"./YAxis-gzpn2USg.js";import{L as O}from"./Legend-CiVde6Tb.js";import{T as W}from"./Tooltip-B_ouAOy3.js";import{L as C}from"./Line-QUZhKIKJ.js";import{R as X}from"./RechartsHookInspector-BZMd9r0w.js";import{C as Y}from"./Curve-DqcNZQQ9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CerPTbDf.js";import"./immer-BPZQF6xW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0wr5dja.js";import"./index-DBNDbbEj.js";import"./hooks-DRvuAM61.js";import"./axisSelectors-D6N9K5pJ.js";import"./d3-scale-bPIVgrq4.js";import"./zIndexSlice-CVos1qNt.js";import"./renderedTicksSlice-CULSuwf6.js";import"./CartesianChart-Bf-pcG1N.js";import"./chartDataContext-DxmOKRxG.js";import"./CategoricalChart-C3pZv0iV.js";import"./CartesianAxis-Qsc6tL7N.js";import"./Layer-Dz5BSX-y.js";import"./Text-CQ7cV61I.js";import"./DOMUtils-BnflEJNu.js";import"./Label-Ck2nWAbG.js";import"./ZIndexLayer-Dpd4MxoT.js";import"./types-DFzRwbJd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BrylnLFr.js";import"./symbol-Cv3vZKNL.js";import"./step-BNGIjVY6.js";import"./useElementOffset-CcesUvCf.js";import"./uniqBy-BwUTREYv.js";import"./iteratee-0Dlmk-XD.js";import"./useAnimationId-GLik1JQl.js";import"./Cross-GCMP8pM2.js";import"./Rectangle-DSXX-_zw.js";import"./Sector-RBT64hMb.js";import"./ReactUtils-BIcQ9LuG.js";import"./ActivePoints-D_gOxfcF.js";import"./Dot-E0S9rOFh.js";import"./RegisterGraphicalItemId-Br_TTAem.js";import"./ErrorBarContext-Di7xd7Lk.js";import"./GraphicalItemClipPath-DUplZfGU.js";import"./SetGraphicalItem-DnFjb-ph.js";import"./getRadiusAndStrokeWidthFromDot-CMmixfMt.js";import"./ActiveShapeUtils-BW3KdMee.js";import"./isPlainObject-yome26yk.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BE4mHG6h.js";import"./index-DCPl85jO.js";import"./ChartSizeDimensions-Dh66BsMo.js";import"./OffsetShower-vaJOlCun.js";import"./PlotAreaShower-CMsAoFdB.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
