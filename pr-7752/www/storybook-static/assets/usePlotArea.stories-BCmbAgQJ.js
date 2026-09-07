import{R as t}from"./iframe-DJz24IKn.js";import{j as a}from"./RechartsWrapper-DWus6mTf.js";import{R as p}from"./zIndexSlice-CaAOW0et.js";import{C as n}from"./ComposedChart-xCfhu6hO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BvJdofYx.js";import{X as l}from"./XAxis-BvHkm7Qz.js";import{Y as h}from"./YAxis-D-LGUrvE.js";import{L as c}from"./Legend-8QayZjLh.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Y06lZ3Q4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dn-i2Eyh.js";import"./throttle-BsbtN1cS.js";import"./index-BNwKLvBG.js";import"./index-DbXeBKDO.js";import"./isWellBehavedNumber-fz8KERtX.js";import"./d3-scale-DpRdoN7U.js";import"./index-C__guRbQ.js";import"./index-C6YBLKF8.js";import"./renderedTicksSlice-Dg7Ny4_Y.js";import"./index-DMHuassP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnQAJVhL.js";import"./chartDataContext-Dgbqaxm0.js";import"./CategoricalChart-uGwJvut9.js";import"./Layer-CBv-uhLi.js";import"./Curve-3bxMRdbj.js";import"./types-DwqEhWGa.js";import"./step-BwCbZBCr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CKV2EJWT.js";import"./Label-VNkqCN5V.js";import"./Text-DOF1K2eH.js";import"./DOMUtils-bn8Tja0g.js";import"./useId-B5fw3oZO.js";import"./useBackwardsCompatibleTheme-LsfOWVY-.js";import"./ZIndexLayer-Clw8d4Oc.js";import"./useAnimationId-CK0cbgiG.js";import"./ActivePoints-CWxCsPop.js";import"./Dot-C5Lvhk5n.js";import"./RegisterGraphicalItemId-2YIIw7m6.js";import"./ErrorBarContext-BLLu5XO3.js";import"./GraphicalItemClipPath-CvjsKkOB.js";import"./SetGraphicalItem-npZ_hDhu.js";import"./getRadiusAndStrokeWidthFromDot-CFlofvCE.js";import"./ActiveShapeUtils-BKaKBNza.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dg3lbTZ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DerxF3g_.js";import"./symbol-zN9zL-V3.js";import"./useElementOffset-CceHZgWF.js";import"./uniqBy-BmN8ddO_.js";import"./iteratee-BEbzn8gE.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
