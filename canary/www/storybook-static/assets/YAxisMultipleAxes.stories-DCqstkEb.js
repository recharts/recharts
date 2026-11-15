import{R as t}from"./iframe-DehjRTS0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BGtv0j9s.js";import{R as l}from"./zIndexSlice-Or93N-XC.js";import{C as x}from"./ComposedChart-9t6iBSgP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BGHmAtMD.js";import{L as a}from"./Line-5vGDPRrb.js";import{X as c}from"./XAxis-Cg2bfD3w.js";import{T as g}from"./Tooltip-RN1BeYcT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D6Z-0Dfn.js";import"./Text-CTuG3Uwk.js";import"./resolveDefaultProps-CMD_wJjc.js";import"./ZIndexLayer-DkIV4AJ1.js";import"./index-DETf35J4.js";import"./index-CwuhsW6L.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Ka3IcW3O.js";import"./throttle-DesffiZ0.js";import"./axisSelectors-DZdKwAWL.js";import"./d3-scale-C22MolAx.js";import"./CartesianAxis-CwmDOfi4.js";import"./Layer-DlT20hA_.js";import"./types-Be7PvpBk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ct6BbSAX.js";import"./index-CXT-2IyT.js";import"./index-KpNlVNDm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CRtSS_eM.js";import"./index-kCr6N--m.js";import"./fillDefinitions-DhW3x4ou.js";import"./CartesianChart-CgHz7Gaf.js";import"./chartDataContext-BjcKNpHZ.js";import"./CategoricalChart-DkUvkRm5.js";import"./dataEntryStyles-DzT0ep5z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-w2oZ3J.js";import"./useAnimationId-DcJ3b19B.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D-equOl3.js";import"./tooltipContext-eFEUsm3a.js";import"./ErrorBarContext-CF1ouw75.js";import"./activeStyles-CTG2KgqA.js";import"./SetGraphicalItem-Doit17ow.js";import"./getZIndexFromUnknown-CtA--8Vx.js";import"./useEffectiveDataKey-7YBRaAIn.js";import"./omit-DbGvskck.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D6YGUkKE.js";import"./step-BGdpfV3H.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CFvg43Jt.js";import"./Dot-DF2koN3g.js";import"./Symbols-C5Duu2Up.js";import"./symbol-CWMlQuGp.js";import"./getRadiusAndStrokeWidthFromDot-B4Nwvyfh.js";import"./useElementOffset-DLrTCfvS.js";import"./uniqBy-B1en0uiU.js";import"./iteratee-BJM6y6Dd.js";import"./Cross-sQtHeT5A.js";import"./Sector-BVdOU8s1.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
