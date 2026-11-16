import{R as t}from"./iframe-DBZHgkHz.js";import{z as a}from"./RechartsWrapper-CdEOi8nf.js";import{R as p}from"./zIndexSlice-CCEect8Y.js";import{C as n}from"./ComposedChart-69aI63gR.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-R8h2aTlS.js";import{X as l}from"./XAxis-Bnvf5Lo_.js";import{Y as h}from"./YAxis-qEVvtCkb.js";import{L as c}from"./Legend-yxNncvKz.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bvsyp51I.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CuFbzFkp.js";import"./throttle-VBcNMDCY.js";import"./index-DGbD_6uH.js";import"./index-EJLKzrUV.js";import"./polarAxisSelectors-BLShzrWN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CCNti6RY.js";import"./index-CyqgVO8h.js";import"./index-BWY5Ai4-.js";import"./renderedTicksSlice-DsR53_S1.js";import"./index-D7sJrNgb.js";import"./fillDefinitions-CJlHmTcA.js";import"./CartesianChart-B8ylmrv_.js";import"./chartDataContext-l1L_LONz.js";import"./CategoricalChart-Bed811or.js";import"./Layer-D9n5kKSs.js";import"./Curve-BXZ-CwEQ.js";import"./types-CiZDyVvS.js";import"./step-Dfu77DD6.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C2eRsswd.js";import"./Label-rCJ8JAiM.js";import"./Text-DbdJ2rHF.js";import"./ZIndexLayer-BEGts5gU.js";import"./ActivePoints-DL3AO8Rf.js";import"./Dot-BMzut5pd.js";import"./activeStyles-Ccn_YinS.js";import"./useAnimationId-DSFmvkxj.js";import"./Symbols-Dffl-I8q.js";import"./symbol-BsRW9Z6s.js";import"./ErrorBarContext-D4CjkMQU.js";import"./SetGraphicalItem-CyD7jeIx.js";import"./getRadiusAndStrokeWidthFromDot-B9CvVbbz.js";import"./ActiveShapeUtils-DHVoZWQX.js";import"./useEffectiveDataKey-jt0Z3g1O.js";import"./CartesianAxis-BUQjH22T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-lqrBTYbX.js";import"./uniqBy-4s5Lfnt3.js";import"./iteratee-DHow2gXt.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
