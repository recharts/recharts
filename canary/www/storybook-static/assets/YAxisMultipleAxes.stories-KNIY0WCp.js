import{R as t}from"./iframe-7ITK_SeI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DKQSRoB1.js";import{R as l}from"./zIndexSlice-Bfez01E7.js";import{C as x}from"./ComposedChart-CXRmBdio.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Du7VDG5P.js";import{L as a}from"./Line-CaFC4Px9.js";import{X as c}from"./XAxis-B6K6oeNG.js";import{T as g}from"./Tooltip-qvRapYQp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CsN2_Owm.js";import"./Text-uEM3tCf7.js";import"./resolveDefaultProps-DPD-Ehfr.js";import"./DOMUtils-B8HJjEQc.js";import"./ZIndexLayer-CUOO17YZ.js";import"./index-BWOYN4v6.js";import"./index-B6PSRbSm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D1t4qM7h.js";import"./throttle-DZAxS36c.js";import"./axisSelectors-BYlSNMl6.js";import"./d3-scale-CgbIH62T.js";import"./CartesianAxis-P1lu35Vw.js";import"./Layer-x5ioE0yr.js";import"./types-CwLExx_V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWRnvg7c.js";import"./index-CPO6Y0gx.js";import"./index-BX7LvsvC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bg4i1fRK.js";import"./index-icjlISLt.js";import"./fillDefinitions-BLJHfD9l.js";import"./CartesianChart-BIfTf3EX.js";import"./chartDataContext-DsZ1g-wA.js";import"./CategoricalChart-DOHYP0Wg.js";import"./ZIndexPortal-BCW_CUyX.js";import"./LabelList-DyQMPI8I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xMO0G7Eu.js";import"./useAnimationId-DKK7KP9l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CkUaBVCr.js";import"./tooltipContext-Cm8qG72z.js";import"./dataEntryStyles-Dd39-khT.js";import"./ErrorBarContext-Ch69wvN-.js";import"./activeStyles-CTNWVDS5.js";import"./SetGraphicalItem-DVqvqVag.js";import"./getZIndexFromUnknown-CsLSVQME.js";import"./useEffectiveDataKey-EiVngFCy.js";import"./omit-DQlHZcp1.js";import"./isArguments-yB-y1yaH.js";import"./Curve-SIwN0AJD.js";import"./step-DDoJ0d0M.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CfvU-oNA.js";import"./Dot-H1TfH3hy.js";import"./Symbols-CGGO5VAJ.js";import"./symbol-CV73IRCS.js";import"./getRadiusAndStrokeWidthFromDot-Cev_FaPT.js";import"./useElementOffset-Brrafjou.js";import"./uniqBy-DancdYdq.js";import"./iteratee-37xDdBAO.js";import"./Cross-DDXQ0nW9.js";import"./Sector-DPk6gxpc.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
