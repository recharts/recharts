import{R as t}from"./iframe-zm2RFiAA.js";import{a as p}from"./isWellBehavedNumber-BsUHNZ1L.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-xlOLMTjJ.js";import{R as T}from"./zIndexSlice-DqZBLIbU.js";import{C as M}from"./CartesianGrid-_vwIk58n.js";import{X as $}from"./XAxis-BmR_Q4ey.js";import{Y as I}from"./YAxis-QmJ3fv5f.js";import{L as O}from"./Legend-3YSW8Cw0.js";import{T as W}from"./Tooltip-Biq5tAED.js";import{L as C}from"./Line-BYHn6zsd.js";import{C as X}from"./Curve-KfMVJIMR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DVyNUYq0.js";import"./RechartsWrapper-Bnt3Xjg2.js";import"./axisSelectors-D_XgtjC9.js";import"./throttle-8D1mAr5a.js";import"./index-DYoeUBFv.js";import"./index-C05Q7pAX.js";import"./d3-scale-CIfEmdT5.js";import"./index-Cyz_PThi.js";import"./index-0SlDOcWE.js";import"./renderedTicksSlice-DM7SAuzg.js";import"./index-DpXVo8J4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CZZG3tzb.js";import"./chartDataContext-ChtOwbQ7.js";import"./CategoricalChart-Cc-dXh8l.js";import"./CartesianAxis-BTS4yOao.js";import"./Layer-CBvDM-ZR.js";import"./Text-bm4_J_IC.js";import"./DOMUtils-Dj43lFCA.js";import"./useId-DIhnWHEa.js";import"./useBackwardsCompatibleTheme-DTCZ1OkH.js";import"./Label-Dpn-Rbeg.js";import"./ZIndexLayer-fVuj_SHP.js";import"./types-DQCUIdcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Be1ARyPs.js";import"./symbol-D4dBulFC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DwCmeGut.js";import"./uniqBy-9E3wEZWV.js";import"./iteratee-BczLgGSK.js";import"./useAnimationId-DbteGMIo.js";import"./Cross-CMoi-VYV.js";import"./Rectangle-CqUtXW6N.js";import"./util-Dxo8gN5i.js";import"./Sector-CixyiijL.js";import"./AnimatedItems-Cn3auVQS.js";import"./ActivePoints-Bo7SycvC.js";import"./Dot-DeAdYXSf.js";import"./RegisterGraphicalItemId-CFLy-PgK.js";import"./ErrorBarContext-gzjuFQOm.js";import"./GraphicalItemClipPath-CrDoK_iS.js";import"./SetGraphicalItem-CMYFNCGq.js";import"./getRadiusAndStrokeWidthFromDot-Db_AAYxl.js";import"./ActiveShapeUtils-ClA9znOB.js";import"./useGraphicalItemIdentity-C6EWaBUb.js";import"./step-BBLL9Nmi.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
