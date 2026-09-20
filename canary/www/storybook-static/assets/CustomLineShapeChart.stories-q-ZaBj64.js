import{R as t}from"./iframe-CgFNOWkZ.js";import{a as p}from"./isWellBehavedNumber-Cr26aOyF.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DWR_vU4y.js";import{R as T}from"./zIndexSlice-CnfPauoq.js";import{C as M}from"./CartesianGrid-B3_ZhlFR.js";import{X as $}from"./XAxis-Bdjd5PBO.js";import{Y as I}from"./YAxis-Bn0ZQNQZ.js";import{L as O}from"./Legend-DsuBGmj6.js";import{T as W}from"./Tooltip-hzNlJo4b.js";import{L as C}from"./Line-4xvbcNSQ.js";import{C as X}from"./Curve-O27qjVv6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B5p3Q00G.js";import"./RechartsWrapper-CU75wXMo.js";import"./axisSelectors-CDnWxexV.js";import"./throttle-CwNcKmkm.js";import"./index-hYkm-J_b.js";import"./index-DjTwooh3.js";import"./d3-scale-EAUzpRo7.js";import"./index-DlEkrCr0.js";import"./index-CIxokqwK.js";import"./renderedTicksSlice-dpz4HLD4.js";import"./index-BKLtIohb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2LWrJC3.js";import"./chartDataContext-BPHBCGRy.js";import"./CategoricalChart-DEeDNDbs.js";import"./CartesianAxis-CE5tgyYR.js";import"./Layer-DQEpCXa4.js";import"./Text-BCy-48NS.js";import"./DOMUtils-BuWky4GR.js";import"./useId-Cn22DgH8.js";import"./useBackwardsCompatibleTheme-qMLBJgjs.js";import"./Label-DM_lkfp6.js";import"./ZIndexLayer-ZdAzMWJW.js";import"./types-C1vo7smu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dhpqo7YW.js";import"./symbol-DMRhcOQz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFZH7CAW.js";import"./uniqBy-B6NCt-4C.js";import"./iteratee-DHR339hL.js";import"./useAnimationId-DZ6wcHPj.js";import"./Cross-t6tx45j-.js";import"./Rectangle-lr0FbpfG.js";import"./util-Dxo8gN5i.js";import"./Sector-ClDWYj6L.js";import"./AnimatedItems-UKua_m0c.js";import"./ActivePoints-DfS8V4yA.js";import"./Dot-DaO5ThZO.js";import"./RegisterGraphicalItemId-DQaeZdby.js";import"./ErrorBarContext-he3EC3WX.js";import"./GraphicalItemClipPath-BUB4x5xD.js";import"./SetGraphicalItem-CsabRogn.js";import"./getRadiusAndStrokeWidthFromDot-BfxRkwb-.js";import"./ActiveShapeUtils-CgLseHdF.js";import"./useGraphicalItemIdentity-Z3uBGV6O.js";import"./step-D28zNE0u.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
