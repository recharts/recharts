import{R as t}from"./iframe-DgQvZQyh.js";import{a as s}from"./isWellBehavedNumber-1FtJDRA4.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-vhk0Hd6c.js";import{R as T}from"./zIndexSlice-Btq-n8Y8.js";import{C as M}from"./CartesianGrid-BonfojMO.js";import{X as $}from"./XAxis-B4xwOvnI.js";import{Y as I}from"./YAxis-B-S92WaL.js";import{L as O}from"./Legend-CvI7QQBV.js";import{T as W}from"./Tooltip-PE5z2rM6.js";import{L as C}from"./Line-ndrlyXuf.js";import{C as X}from"./Curve-ihXVzoU6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgdEm8CY.js";import"./RechartsWrapper-DQot8Dvj.js";import"./index-Bb9OGTvq.js";import"./index-D86HQKsa.js";import"./index-Cq8r6DAn.js";import"./index-BZXsqVam.js";import"./throttle-Dk-DfWHx.js";import"./axisSelectors-VvYM7u3M.js";import"./d3-scale-uYT3pExD.js";import"./renderedTicksSlice-Cx5LcFk7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPjqqiaN.js";import"./chartDataContext-CZdqNQBA.js";import"./CategoricalChart-ZwyKDo7N.js";import"./CartesianAxis-BguBsSE9.js";import"./Layer-jy0y6JzX.js";import"./Text-BCNrLAhU.js";import"./DOMUtils-Dc6imoC2.js";import"./useId-Dpr_zhHQ.js";import"./useBackwardsCompatibleTheme-CyfSeWLo.js";import"./Label-D7SUzQZZ.js";import"./ZIndexLayer-COjkhmxj.js";import"./types-DyDamtmF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cx2m1nqb.js";import"./symbol-DU_MIklD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BASXZrSa.js";import"./uniqBy-rST57Vux.js";import"./iteratee-BL-nEGkT.js";import"./useAnimationId-CMrpUBKd.js";import"./Cross-DJTs7157.js";import"./Rectangle-CkzbQ6sY.js";import"./util-Dxo8gN5i.js";import"./Sector-D-WZW2-Q.js";import"./AnimatedItems-CDuN3lv4.js";import"./ActivePoints-Lw7-gIIJ.js";import"./Dot-Cp5LqDbN.js";import"./RegisterGraphicalItemId-CgmuqVKA.js";import"./ErrorBarContext-C9gjoIKa.js";import"./GraphicalItemClipPath-wWG5NmBB.js";import"./SetGraphicalItem-WfznSmPk.js";import"./getRadiusAndStrokeWidthFromDot-zg-JnYSm.js";import"./ActiveShapeUtils-bdnMAsi3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-ByO1iE7m.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
