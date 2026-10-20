import{R as t}from"./iframe-DtNEXb77.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BIfcFYbQ.js";import{R as l}from"./zIndexSlice-C61cTRUd.js";import{C as x}from"./ComposedChart-D7gBmB-e.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DDZ4_pAa.js";import{L as a}from"./Line-B2PHvqdd.js";import{X as c}from"./XAxis-B8fOHSNk.js";import{T as g}from"./Tooltip-B7uEKN2c.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-9NLOMOhr.js";import"./Text-M6NyH5bl.js";import"./resolveDefaultProps-Ci1CA8vh.js";import"./pageBackground-CwZqZ7-z.js";import"./isWellBehavedNumber-C5_DATUj.js";import"./useId-fj0geEgf.js";import"./useBackwardsCompatibleTheme-By9gF9DG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBx6DJIh.js";import"./index-DqUzV6Pu.js";import"./index-Da1Kct3U.js";import"./axisSelectors-CRqNtGDu.js";import"./throttle-DHRCkM2S.js";import"./d3-scale-4c7z9Afg.js";import"./CartesianAxis-BqiHJNgo.js";import"./Layer-809xSg6I.js";import"./types-CsDLwvl0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BLHzyPiU.js";import"./index-By0oCmzG.js";import"./index-B8VSKNpf.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B3jS1aTx.js";import"./index-BsnYyY0R.js";import"./CartesianChart-Bw3KaQeV.js";import"./chartDataContext-BMn1S1Pl.js";import"./CategoricalChart-IPQiQcsO.js";import"./activeStyles-BtinU4U_.js";import"./useAnimationId-B5nilSLl.js";import"./dataEntryStyles-DdoWImTb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_OpsUN-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKa9wY87.js";import"./tooltipContext-CerBpj9p.js";import"./ErrorBarContext-Cs-Qof9d.js";import"./GraphicalItemClipPath-D1LTNIcZ.js";import"./SetGraphicalItem-CBRl2Ktm.js";import"./getZIndexFromUnknown-iDO9kbJO.js";import"./useEffectiveDataKey-BFzz_xKL.js";import"./omit-C026_7B7.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C4o5b1LX.js";import"./step-DBGMRA4B.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cq7N-Rzx.js";import"./Dot-wiF8eMia.js";import"./getRadiusAndStrokeWidthFromDot-50sO_gfq.js";import"./useElementOffset-BQLGRE_E.js";import"./uniqBy-DRVk0Ehd.js";import"./iteratee-rlP-A4cC.js";import"./Cross-_SAGdCEj.js";import"./Sector-CkM0ROhk.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
