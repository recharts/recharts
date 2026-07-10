import{R as t}from"./iframe-DfxvUCoY.js";import{i as p}from"./isWellBehavedNumber-By0pufN4.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CXKyasQ_.js";import{R as T}from"./zIndexSlice-a1aajdGJ.js";import{C as M}from"./CartesianGrid-CEYliQmp.js";import{X as $}from"./XAxis-CDwQyzI6.js";import{Y as I}from"./YAxis-CHYqw0Yg.js";import{L as O}from"./Legend-BxQh4kdT.js";import{T as W}from"./Tooltip-CQtlB1yQ.js";import{L as C}from"./Line-BI5q6xYq.js";import{C as X}from"./Curve-Bell45ld.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DkGy9Xqs.js";import"./RechartsWrapper-DKrR_shM.js";import"./index-CFU132wJ.js";import"./index-qAfe5-0Z.js";import"./index-snxaCIu3.js";import"./index-BZyQtlPK.js";import"./throttle-CY5RCzqb.js";import"./renderedTicksSlice-D3ObCuZG.js";import"./axisSelectors-XkeOj5U9.js";import"./d3-scale-CsKfZS2s.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqCTaCca.js";import"./chartDataContext-DU69Yd0K.js";import"./CategoricalChart-B1rK5u_C.js";import"./CartesianAxis-BuUJ6A2m.js";import"./Layer-D1z9Z2fI.js";import"./Text-B6Z1U-Hi.js";import"./DOMUtils-DG22iS9R.js";import"./Label-Db_taApy.js";import"./ZIndexLayer-BYPoLUrq.js";import"./types-DZdy7jpS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-wpUxxR7U.js";import"./symbol-Dlj2CrYw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BEOZ1gXg.js";import"./uniqBy-Aa4pim-J.js";import"./iteratee-CZBfFxXi.js";import"./useAnimationId-D9BVxJGQ.js";import"./Cross-D06welhQ.js";import"./Rectangle-Dl1vC_ro.js";import"./util-Dxo8gN5i.js";import"./Sector-BqiRLkjq.js";import"./AnimatedItems-DEpW04f-.js";import"./ActivePoints-Bi6fN5zN.js";import"./Dot-BKUKbPeQ.js";import"./RegisterGraphicalItemId-uzM-_OM4.js";import"./ErrorBarContext-D2pK0104.js";import"./GraphicalItemClipPath-D5-jIAHW.js";import"./SetGraphicalItem-8Isqc2ZP.js";import"./getRadiusAndStrokeWidthFromDot-DIcAvM1x.js";import"./ActiveShapeUtils-BCjs6TQU.js";import"./step-BKVqTwxS.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
