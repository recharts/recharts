import{R as t}from"./iframe-BJwrbqqi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BRttk8mJ.js";import{R as l}from"./zIndexSlice-Dgyv34Z4.js";import{C as x}from"./ComposedChart-BZiAB31H.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CvzNsmkk.js";import{L as a}from"./Line-ChjYxcU9.js";import{X as c}from"./XAxis-B7ZX8Kfa.js";import{T as g}from"./Tooltip-D-aHLOso.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-XjwS876P.js";import"./Text-KHiJMqsX.js";import"./resolveDefaultProps-C-uvAkWz.js";import"./pageBackground-BIIIhWKR.js";import"./isWellBehavedNumber-pfE5Q5mt.js";import"./useId-DQUV3KXo.js";import"./useBackwardsCompatibleTheme-B8str_Tp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJ-hVFwd.js";import"./index-G7qNEGy_.js";import"./index-DvHXQAWB.js";import"./dataEntryStyles-D7ilp65R.js";import"./axisSelectors-C5NObvkt.js";import"./throttle-pfeYxzRR.js";import"./d3-scale-DSWUCzXy.js";import"./CartesianAxis-CmiU-XO8.js";import"./Layer-eN5gk5Rs.js";import"./types-BBGLRMuE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BnrduSeF.js";import"./index-DsGTB-aY.js";import"./index-WSINJmPt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DeuEZMtn.js";import"./index-BP4AOHzk.js";import"./CartesianChart-CLAnODbR.js";import"./chartDataContext-BDqLbH1o.js";import"./CategoricalChart-Db_HBiCU.js";import"./activeStyles-JM_riMMZ.js";import"./useAnimationId-Cz6ggmzR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DKcQQ7tK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSUQ40Ee.js";import"./tooltipContext-Ds0YQgby.js";import"./RegisterGraphicalItemId-CPxaQHtW.js";import"./ErrorBarContext-8FsJ_EHd.js";import"./GraphicalItemClipPath-D57dspwd.js";import"./SetGraphicalItem-Dgy41JCB.js";import"./getZIndexFromUnknown-8xBVpWQi.js";import"./useEffectiveDataKey-dwhPZ08z.js";import"./omit-ai2KogqZ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DpfItrvf.js";import"./step-CFdztVjQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-5m6R4yet.js";import"./Dot-Bsu5ZBhw.js";import"./getRadiusAndStrokeWidthFromDot-DpwEmJ7r.js";import"./useElementOffset-B3zfLjYP.js";import"./uniqBy-CLTRPXtC.js";import"./iteratee-DM8gut2i.js";import"./Cross-b_5sADJx.js";import"./Sector-CfxM3osn.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
