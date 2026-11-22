import{R as t}from"./iframe-C2FiVbx6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-H-bG_GIE.js";import{R as l}from"./zIndexSlice-CIwOLMY2.js";import{C as x}from"./ComposedChart-Bj-Vd15E.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BEN9Yk2L.js";import{L as a}from"./Line-S0l6mAcw.js";import{X as c}from"./XAxis-BpwUAM2i.js";import{T as g}from"./Tooltip-BAhkDjqS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-oSfspIu2.js";import"./Text-DUuV2-iR.js";import"./resolveDefaultProps-CRuYPp9Y.js";import"./ZIndexLayer-CyqrJVrU.js";import"./index-abbND0en.js";import"./index-qkgHpql3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bm0LaijP.js";import"./throttle-Cf_mfeUw.js";import"./axisSelectors-DzJ8Skeq.js";import"./d3-scale-Dmh-LY51.js";import"./CartesianAxis-LjFWWnk2.js";import"./Layer-BbCOnDJZ.js";import"./types-CTWOnDaX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DfOOwYLv.js";import"./index-2QDsETde.js";import"./index-CRK-dYW4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CzRJf9wd.js";import"./index-CmXMjoXJ.js";import"./fillDefinitions-0TcAAZ0C.js";import"./CartesianChart-DXHWhKco.js";import"./chartDataContext-CxmIzf3r.js";import"./CategoricalChart-CH_w6Aat.js";import"./dataEntryStyles-Cr8Jhwhl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COqz7K3J.js";import"./useAnimationId-DeWO3OMz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-xS0QhUpf.js";import"./tooltipContext-DqGlosK_.js";import"./ErrorBarContext-Bl0bf3v5.js";import"./activeStyles-Cz6uJME2.js";import"./SetGraphicalItem-CdikQP2n.js";import"./getZIndexFromUnknown-Dc5vCIAz.js";import"./useEffectiveDataKey-pHEaOl4p.js";import"./omit-Btzb6-J4.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-0SqF3Wbd.js";import"./Curve-r64DCwYW.js";import"./step-CFQC-oeW.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BoBRdB0i.js";import"./Dot-CKxlSMqI.js";import"./Symbols-D3G4ac0V.js";import"./symbol-By85hRRg.js";import"./useElementOffset-D2fgVs1p.js";import"./uniqBy-83-1iH4D.js";import"./iteratee-D1g8o1KX.js";import"./Cross-2MxY5Dn8.js";import"./Sector-CeBdb2pY.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
