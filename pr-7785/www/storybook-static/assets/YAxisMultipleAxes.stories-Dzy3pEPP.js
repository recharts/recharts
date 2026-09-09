import{R as t}from"./iframe-WBosH1gH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CenhW_SV.js";import{R as l}from"./zIndexSlice-DY0UoJ4l.js";import{C as x}from"./ComposedChart-DgMot__w.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DoQkJol7.js";import{L as a}from"./Line-CfXL_ESg.js";import{X as c}from"./XAxis-m7Q_C79b.js";import{T as g}from"./Tooltip-rif23icC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BCHXbIDv.js";import"./Text-DUKo7lId.js";import"./resolveDefaultProps-B2r9_mKe.js";import"./DOMUtils-Cua0edvn.js";import"./isWellBehavedNumber-BkYn7WHA.js";import"./useId-QCeL7Xpe.js";import"./useBackwardsCompatibleTheme-Dm9WBqGk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ceqldfm9.js";import"./index-BwqgnM9k.js";import"./index-VfXF9cRB.js";import"./RechartsWrapper-B0qr77rU.js";import"./axisSelectors-DVaMQoZI.js";import"./throttle-XsvTB-sR.js";import"./d3-scale-D0rOwI1X.js";import"./index-vxpjOmvK.js";import"./index-0eRMU_eW.js";import"./renderedTicksSlice-w1R0M-NQ.js";import"./index-C25eF-tn.js";import"./CartesianAxis-Bjry6SmX.js";import"./Layer-DlEXHs0c.js";import"./types-CXdVyMYF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DVqibfCK.js";import"./chartDataContext-CniWriLR.js";import"./CategoricalChart-DG5t8KxI.js";import"./AnimatedItems-DJehR24_.js";import"./useAnimationId-B1IfIBZT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCQKHFOK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhiQ5sHd.js";import"./tooltipContext-C_Mku4Mk.js";import"./RegisterGraphicalItemId-CooVBKDB.js";import"./ErrorBarContext-LEGekQDa.js";import"./GraphicalItemClipPath-t-5ZkTcv.js";import"./SetGraphicalItem-C5z9UzHr.js";import"./getZIndexFromUnknown-BPqJjSTB.js";import"./useGraphicalItemIdentity-BcmjlH91.js";import"./Curve-CWu1k2x-.js";import"./step-774Uk35K.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CpdsnThn.js";import"./Dot-DxEZ3OZ8.js";import"./getRadiusAndStrokeWidthFromDot-CwInr6tA.js";import"./useElementOffset-VmdMhEAv.js";import"./uniqBy-CDDW1t5J.js";import"./iteratee-C0LkWsI5.js";import"./Cross-4kelqF0b.js";import"./Sector-CQKr0wQc.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
