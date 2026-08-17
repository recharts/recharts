import{R as t}from"./iframe-BPne-Hl-.js";import{a as s}from"./isWellBehavedNumber-Ct771fgh.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DLc4rpuH.js";import{R as T}from"./zIndexSlice-Vbxajxxh.js";import{C as M}from"./CartesianGrid-btbBUur8.js";import{X as $}from"./XAxis-rRwDqEnY.js";import{Y as I}from"./YAxis-C0fNq5VI.js";import{L as O}from"./Legend-CbVrBR9Z.js";import{T as W}from"./Tooltip-9yXvT-wW.js";import{L as C}from"./Line-BF3gtbV4.js";import{C as X}from"./Curve-DxMSvAJ7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDnfF8y9.js";import"./RechartsWrapper-D7wPyuzK.js";import"./index-B-eC6RsS.js";import"./index-CxrNEW2y.js";import"./index-uv_fcL6C.js";import"./index-CwJJwB5T.js";import"./throttle-Bi_zW3_L.js";import"./axisSelectors-LTfENhRo.js";import"./d3-scale-DOpYrlme.js";import"./renderedTicksSlice-DT6TytRZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QFuu_jnw.js";import"./chartDataContext-BudnyF2r.js";import"./CategoricalChart-DWAFRQOx.js";import"./CartesianAxis-ClYaFBOz.js";import"./Layer-SpL-rjyd.js";import"./Text-C95v_Vb1.js";import"./DOMUtils-J3bqy14P.js";import"./useBackwardsCompatibleTheme-CL2xpGGY.js";import"./Label-BrzCwn25.js";import"./ZIndexLayer-DfzxMoSO.js";import"./types-BUNHJ5Kw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BRthCvHo.js";import"./symbol-BqX0FdKg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-dphqCukD.js";import"./uniqBy-B3LW5wu3.js";import"./iteratee-DPXVHfHy.js";import"./useAnimationId-Bq5h4Na4.js";import"./Cross-D0wtR-3X.js";import"./Rectangle-Cn7G2-_l.js";import"./util-Dxo8gN5i.js";import"./Sector-DtWXAxPH.js";import"./AnimatedItems-BPcfKqDa.js";import"./ActivePoints-vna83Vpl.js";import"./Dot-_aT20vJp.js";import"./RegisterGraphicalItemId-DLHR3ZEz.js";import"./ErrorBarContext-DTKdWH8V.js";import"./GraphicalItemClipPath-pLYwGWiU.js";import"./SetGraphicalItem-DdmyrxA9.js";import"./getRadiusAndStrokeWidthFromDot-DdxPvC-_.js";import"./ActiveShapeUtils-IyyDIcQz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-BuUE8tSH.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ht=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
