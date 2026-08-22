import{R as t}from"./iframe-BbXL7Cr7.js";import{a as s}from"./isWellBehavedNumber-DUOtRF_5.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DO8cGs9-.js";import{R as T}from"./zIndexSlice-BR49NRPU.js";import{C as M}from"./CartesianGrid-CX_zoSHh.js";import{X as $}from"./XAxis-Btj2F3fL.js";import{Y as I}from"./YAxis-BvXQJzoS.js";import{L as O}from"./Legend-B-mkfkLh.js";import{T as W}from"./Tooltip-J7PVSXVe.js";import{L as C}from"./Line-CIN54Xgr.js";import{C as X}from"./Curve-NdHov05C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DIGEkxJt.js";import"./RechartsWrapper-IiQ6LAia.js";import"./index-Dax1wg5T.js";import"./index-CN5luugM.js";import"./index-CvmUWFik.js";import"./index-BqU8wZ1z.js";import"./throttle-Bn8wVsPr.js";import"./axisSelectors-BFPpN7bG.js";import"./d3-scale-CN-R3gXh.js";import"./renderedTicksSlice-BsPa3zOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEFHsOHa.js";import"./chartDataContext-HJenhUyy.js";import"./CategoricalChart-D9M8vTvR.js";import"./CartesianAxis-CEc_iNEs.js";import"./Layer-D606BzuS.js";import"./Text-C5yxXkZn.js";import"./DOMUtils-rWy1CvzQ.js";import"./useId-Fqq5zcUf.js";import"./useBackwardsCompatibleTheme-DJFjGyq7.js";import"./Label-BH4Z3dzl.js";import"./ZIndexLayer-C89K7jek.js";import"./types-VwfPPVmd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CE-yqWpF.js";import"./symbol-pCYgDlPb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BwHd0lb7.js";import"./uniqBy-DbN_Kppn.js";import"./iteratee-C6TYOtpK.js";import"./useAnimationId-CZiH3Yfv.js";import"./Cross-CEQTBLEN.js";import"./Rectangle-D-sTh8XH.js";import"./util-Dxo8gN5i.js";import"./Sector-C6xVrq9L.js";import"./AnimatedItems-BMHffIkc.js";import"./ActivePoints-DJMU5OQu.js";import"./Dot-CBGeJdvC.js";import"./RegisterGraphicalItemId-Cp-8L8hF.js";import"./ErrorBarContext-C0nXUhFx.js";import"./GraphicalItemClipPath-CSpG8Jrq.js";import"./SetGraphicalItem-BiIYG94Z.js";import"./getRadiusAndStrokeWidthFromDot-BBwYGeYW.js";import"./ActiveShapeUtils-CNVIMFtT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-DT7n-Jzc.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
