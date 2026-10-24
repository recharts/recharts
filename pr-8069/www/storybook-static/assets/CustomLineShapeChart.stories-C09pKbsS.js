import{R as t}from"./iframe-DmOC-Kec.js";import{a as p}from"./isWellBehavedNumber-CieT4pBa.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DXDk6Ct8.js";import{R as T}from"./zIndexSlice-Dnmn7sAe.js";import{C as M}from"./CartesianGrid-Wch0FJ_N.js";import{X as $}from"./XAxis-ByYBkyBH.js";import{Y as I}from"./YAxis-CcRfM4MH.js";import{L as O}from"./Legend-BuMlXU6a.js";import{T as W}from"./Tooltip-Duroeiyf.js";import{L as C}from"./Line-DKDIyTAQ.js";import{C as X}from"./Curve-Dsy708jZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-4b8FSqHP.js";import"./RechartsWrapper-BAE5OfjG.js";import"./axisSelectors-BhU9IBL9.js";import"./throttle-26j8lv8v.js";import"./index-B8dvCc79.js";import"./index-B0Er-kke.js";import"./d3-scale-BzcnxCkj.js";import"./index-DauADrzh.js";import"./index-FaI1Rch4.js";import"./renderedTicksSlice-BbRk6kVT.js";import"./index-D-7FIJbH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-AsMQKsVq.js";import"./chartDataContext-CyP3b76p.js";import"./CategoricalChart-D6inGbGf.js";import"./CartesianAxis-D2u0I9ER.js";import"./Layer-DqeA_nA2.js";import"./Text-CTMopfR1.js";import"./pageBackground--_ixwiIK.js";import"./useId-BuaxFojz.js";import"./useBackwardsCompatibleTheme-BIerM7O_.js";import"./Label-Dya5Ed-c.js";import"./ZIndexLayer-CPUam-Va.js";import"./dataEntryStyles-CeCSWdpc.js";import"./types-Bi5NSMkf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DkIZTGNL.js";import"./symbol-G7578D_G.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZDsHkVD5.js";import"./uniqBy-BV3xScZI.js";import"./iteratee-M-5VHa93.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BrR1kfhy.js";import"./Cross-DDoE-SGL.js";import"./Rectangle-B2agr858.js";import"./util-Dxo8gN5i.js";import"./Sector-CgcdPgVW.js";import"./activeStyles-CHqa9trn.js";import"./ActivePoints-BeW2RHR2.js";import"./Dot-Ck4Vihzk.js";import"./RegisterGraphicalItemId-CjMER2_v.js";import"./ErrorBarContext-CznJE672.js";import"./GraphicalItemClipPath-a-_vkjmo.js";import"./SetGraphicalItem-DTnHHD7N.js";import"./getRadiusAndStrokeWidthFromDot-CG4C4UUI.js";import"./ActiveShapeUtils-tFB41mpm.js";import"./useEffectiveDataKey-DpBICXZ6.js";import"./step-BqN3jYrj.js";const Ut={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Vt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Vt as __namedExportsOrder,Ut as default};
