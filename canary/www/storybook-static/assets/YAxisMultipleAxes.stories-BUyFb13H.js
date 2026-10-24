import{R as t}from"./iframe-Cb2PTRZu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CFTllxPe.js";import{R as l}from"./zIndexSlice-BOcdwE9B.js";import{C as x}from"./ComposedChart-B38G4g5a.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-eitce1Fa.js";import{L as a}from"./Line-CrkeS2su.js";import{X as c}from"./XAxis-CYL2fqsj.js";import{T as g}from"./Tooltip-B3QRBTsg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-60x-b7-u.js";import"./Text-D_NeQFRY.js";import"./resolveDefaultProps-38f2qAXo.js";import"./pageBackground-Bn3yH5Mf.js";import"./isWellBehavedNumber-DqADXXOT.js";import"./useId-7AGdzjEK.js";import"./useBackwardsCompatibleTheme-DVeueyf3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CMs0nKoK.js";import"./index-CgcevczK.js";import"./index-D3ECOqH8.js";import"./dataEntryStyles-BA7za2_q.js";import"./axisSelectors-YCR54JUg.js";import"./throttle-3iOH7y6s.js";import"./d3-scale-BEDYL0lJ.js";import"./CartesianAxis-Bd5LwOLq.js";import"./Layer-CYH1X6I5.js";import"./types-A7qt-X3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CGIalbK2.js";import"./index-sJmnv_Ao.js";import"./index-BHmwOcB9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DJJRHEYU.js";import"./index-DnXVLer0.js";import"./CartesianChart-bwFjxITE.js";import"./chartDataContext-DEoJ-_XA.js";import"./CategoricalChart-yk48FjSr.js";import"./activeStyles-utpSO3wr.js";import"./useAnimationId-BSibkTQy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCmcE3yJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmjVX6xw.js";import"./tooltipContext-CTudmTBU.js";import"./RegisterGraphicalItemId-B9ytj1I9.js";import"./ErrorBarContext-TOpvzWJt.js";import"./SetGraphicalItem-DtRHo2_o.js";import"./getZIndexFromUnknown-Np8QqKEq.js";import"./useEffectiveDataKey-Me0QsLaT.js";import"./omit-BJhtvRGl.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CXzUSEYX.js";import"./step-D0d2-Qo8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BINdFJVn.js";import"./Dot-CdjxtqZf.js";import"./getRadiusAndStrokeWidthFromDot-iL1mBvr8.js";import"./useElementOffset-CgOYsezl.js";import"./uniqBy-BBNw9Xn-.js";import"./iteratee-DzkDe0Ct.js";import"./Cross-C7mmq037.js";import"./Sector-jK--Yj0M.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
