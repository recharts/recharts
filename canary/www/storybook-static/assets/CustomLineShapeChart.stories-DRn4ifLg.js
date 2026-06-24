import{R as t}from"./iframe-D4CuLoZz.js";import{a as p}from"./isWellBehavedNumber-BHyLU3rm.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DjdCeWce.js";import{R as T}from"./zIndexSlice-SXe885_i.js";import{C as M}from"./CartesianGrid-Dq-8txx_.js";import{X as $}from"./XAxis-eawce65C.js";import{Y as I}from"./YAxis-LKz9SoCr.js";import{L as O}from"./Legend-BuI2PCnr.js";import{T as W}from"./Tooltip-CYSWzhO2.js";import{L as C}from"./Line-CEbuZzhx.js";import{C as X}from"./Curve-BhJuHD0L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DBuLXD7N.js";import"./resolveDefaultProps-BIWi1Y-8.js";import"./RechartsWrapper-BytBl7Lq.js";import"./index-D0U5tyHV.js";import"./index-CRkJbrCH.js";import"./index-DKrwxI3E.js";import"./index-Cama49zD.js";import"./immer-CFokkZQV.js";import"./renderedTicksSlice-DHw40_9x.js";import"./axisSelectors-BkOYejTH.js";import"./d3-scale-Bg-gbMqf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5hGWEsl.js";import"./chartDataContext-BdBlfWO1.js";import"./CategoricalChart-CDNCF4CW.js";import"./CartesianAxis-ntk7Om5m.js";import"./Layer-xCWemoOx.js";import"./Text-xYQOnqwx.js";import"./DOMUtils-CZgli98g.js";import"./Label-CcUkFPjg.js";import"./ZIndexLayer-CwgCBSKX.js";import"./types-DyFRA-Bh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DtjLh33F.js";import"./symbol-C9JV79Ky.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHHmWbKa.js";import"./uniqBy-YpJRvRQv.js";import"./iteratee-WqXFclZi.js";import"./useAnimationId-DrVwX4j9.js";import"./Cross-DDsze3iQ.js";import"./Rectangle-wZa2ZWZX.js";import"./util-Dxo8gN5i.js";import"./Sector-DQrYYCd9.js";import"./AnimatedItems-EJSTJ3cq.js";import"./ActivePoints-BXZGkgHe.js";import"./Dot-Du83lW60.js";import"./RegisterGraphicalItemId-BYXBvuEW.js";import"./ErrorBarContext-uD9druzE.js";import"./GraphicalItemClipPath-Dcao9gEo.js";import"./SetGraphicalItem-D5XyE2WD.js";import"./getRadiusAndStrokeWidthFromDot-CsYgyjN7.js";import"./ActiveShapeUtils-B2FaHUJe.js";import"./step-DSq6gAzd.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
