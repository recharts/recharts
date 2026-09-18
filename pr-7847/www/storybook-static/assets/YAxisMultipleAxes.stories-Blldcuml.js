import{R as t}from"./iframe-lcK-LQ4H.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BD_opFpC.js";import{R as l}from"./zIndexSlice-3xiznc3T.js";import{C as x}from"./ComposedChart-CqUZzBcz.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BVr72496.js";import{L as a}from"./Line-D4XTruOS.js";import{X as c}from"./XAxis-U3uV11HY.js";import{T as g}from"./Tooltip-UefMF0_o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DdX71Pmy.js";import"./Text-B9QwYOBa.js";import"./resolveDefaultProps-CrEw_DbM.js";import"./DOMUtils-DOyQnx6z.js";import"./isWellBehavedNumber-BNK5esbm.js";import"./useId-BdIxfVgV.js";import"./useBackwardsCompatibleTheme-CRXuFPOK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-peV_8dsk.js";import"./index-BJrdch9J.js";import"./index-DR4LcHaa.js";import"./RechartsWrapper-D3b-43EA.js";import"./axisSelectors-BQOoWmyr.js";import"./throttle-obGnf5ET.js";import"./d3-scale-BGtfSAS2.js";import"./index-Bq7_2YG0.js";import"./index-CO-uW0YU.js";import"./renderedTicksSlice-OgdWdUmt.js";import"./index-PavZfgBD.js";import"./CartesianAxis-lKQduzRC.js";import"./Layer-BrJH3_5y.js";import"./types-iT_AM-R8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DDPqNkhD.js";import"./chartDataContext-JPZtnlxr.js";import"./CategoricalChart-P0fttYEL.js";import"./AnimatedItems-BUrFNy4t.js";import"./useAnimationId-CN4TcOgU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-WUBSuO5y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-glOfs5rY.js";import"./tooltipContext-D8bLXP3H.js";import"./RegisterGraphicalItemId-O_HgkeJ0.js";import"./ErrorBarContext-DAMWbZmD.js";import"./GraphicalItemClipPath-oVlg1Xnl.js";import"./SetGraphicalItem-DZtp094S.js";import"./getZIndexFromUnknown-BBHbOPfp.js";import"./useGraphicalItemIdentity-MQMbS4BR.js";import"./Curve-CH5D8euf.js";import"./step-865XHt_v.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B9F3Cvj-.js";import"./Dot-JEYqyfVW.js";import"./getRadiusAndStrokeWidthFromDot-C4ZSDNB8.js";import"./useElementOffset-XRlntQB2.js";import"./uniqBy-CR5sds_H.js";import"./iteratee-DQhw2g_P.js";import"./Cross-B2ICJeQE.js";import"./Sector-DKlqv5u1.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
