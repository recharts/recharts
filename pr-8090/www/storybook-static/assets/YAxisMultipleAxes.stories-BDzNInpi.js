import{R as t}from"./iframe-Dop2FCJV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B3k634-q.js";import{R as l}from"./zIndexSlice-nsfMN2si.js";import{C as x}from"./ComposedChart-Om7t0Gx9.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B8eYyFxS.js";import{L as a}from"./Line-D5imx7T5.js";import{X as c}from"./XAxis-BotDK1s5.js";import{T as g}from"./Tooltip-DMaf7PGT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BDgfZPfI.js";import"./Text-umIfGz-9.js";import"./resolveDefaultProps-DqELWZLJ.js";import"./pageBackground-BKmWYBJ8.js";import"./ZIndexLayer-mYkteocL.js";import"./index-DDOIydJq.js";import"./index-CUtMqYq0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3wFvSyu.js";import"./throttle-D7xfBLch.js";import"./dataEntryStyles-DYOt2-v1.js";import"./axisSelectors-CeHIB0K5.js";import"./d3-scale-Cxj7JE2J.js";import"./CartesianAxis-DU3QwiMj.js";import"./Layer-B-MIuFUl.js";import"./types-BszWz-w9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNT_Edzm.js";import"./index-V2eSo_Pn.js";import"./index-CjK1kGrZ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ziCTvKBS.js";import"./index-DD0oc2h8.js";import"./CartesianChart-DS3MFgQ4.js";import"./ZIndexPortal-D3fjmMCx.js";import"./CategoricalChart-W3056MsQ.js";import"./LabelList-DYliLjPH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLrutJrV.js";import"./useAnimationId-CQv1eLqe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BAcgfjQM.js";import"./tooltipContext-e4TcJLsg.js";import"./RegisterGraphicalItemId-CAURusbQ.js";import"./ErrorBarContext-DG2LKBNq.js";import"./activeStyles-DnOLUEXC.js";import"./SetGraphicalItem--5ECUYsd.js";import"./getZIndexFromUnknown-BWAlY1HO.js";import"./useEffectiveDataKey-gZcrHKmB.js";import"./omit-BkqaImpn.js";import"./isArguments-yB-y1yaH.js";import"./Curve-0Qnio8ZJ.js";import"./step-CV2mnDR5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BOSFqPiQ.js";import"./Dot-CHpl-5cF.js";import"./Symbols-nX61tU3C.js";import"./symbol-DyAd0qFf.js";import"./getRadiusAndStrokeWidthFromDot-CybZPC8K.js";import"./useElementOffset-D9LA4JWt.js";import"./uniqBy-BuyM_tyo.js";import"./iteratee-By-O6bqn.js";import"./Cross-DmMkSZCd.js";import"./Sector-Bv00or61.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
