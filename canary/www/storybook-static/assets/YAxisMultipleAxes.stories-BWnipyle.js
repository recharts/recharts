import{R as t}from"./iframe-BbNtNwCn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C6UVi-mq.js";import{R as l}from"./zIndexSlice-VrNRi_G1.js";import{C as x}from"./ComposedChart-D4iN_2Rf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-bSTZqkum.js";import{L as a}from"./Line-HubJkyzh.js";import{X as c}from"./XAxis-oTutdnda.js";import{T as g}from"./Tooltip-dSp0L5xc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bi0vIQjw.js";import"./Text-jR3JJSu6.js";import"./resolveDefaultProps-DhM2CAPd.js";import"./DOMUtils-DKOsv_Gf.js";import"./isWellBehavedNumber-uY0CIhkC.js";import"./useId-CYI9mRcC.js";import"./useBackwardsCompatibleTheme-w385Ylxa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAj7_5Sx.js";import"./index-75aciM30.js";import"./index-DDphzaTv.js";import"./RechartsWrapper-DE-VI6iZ.js";import"./axisSelectors-BzyIizHG.js";import"./throttle-BKFxohT3.js";import"./d3-scale-Dkbi5OyZ.js";import"./index-BSdVWAmb.js";import"./index-Cs8MvahU.js";import"./renderedTicksSlice-DIxEy3cM.js";import"./index-gTTJo4-y.js";import"./CartesianAxis-Ccs4Ad33.js";import"./Layer-DFZlw494.js";import"./types-fRbVNPnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D4DHjPEA.js";import"./chartDataContext-DlNjoonA.js";import"./CategoricalChart-B7Or92Hs.js";import"./AnimatedItems-LXQvjRXM.js";import"./useAnimationId-CCouJXLZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D88c0sgw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CArN8SR1.js";import"./tooltipContext-DcL2HawB.js";import"./RegisterGraphicalItemId-D25ry5r7.js";import"./ErrorBarContext-Cr3z4FFd.js";import"./GraphicalItemClipPath-B5iQtC38.js";import"./SetGraphicalItem-C_2GZMjS.js";import"./getZIndexFromUnknown-BOFUsWpr.js";import"./useGraphicalItemIdentity-DD2NYUwk.js";import"./Curve-IZX4MWkA.js";import"./step-CORgqai8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BWe-WnoU.js";import"./Dot-xDiH-N__.js";import"./getRadiusAndStrokeWidthFromDot-3xOb0JOi.js";import"./useElementOffset-CsS9BC38.js";import"./uniqBy-CEpMhxOs.js";import"./iteratee-YzPuL1o-.js";import"./Cross-DzMa72YT.js";import"./Sector-D8F7xXdw.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
