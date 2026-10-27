import{R as t}from"./iframe-DHcJjYhp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CgAAJes1.js";import{R as l}from"./zIndexSlice-Cc80mhc9.js";import{C as x}from"./ComposedChart-Bv15pDbO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-mo96EehO.js";import{L as a}from"./Line-CQxvfX6V.js";import{X as c}from"./XAxis-BsCapYe_.js";import{T as g}from"./Tooltip-C3DlAGnj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CDs-ZtGW.js";import"./Text-BAIudaB2.js";import"./resolveDefaultProps-BvovYCe7.js";import"./pageBackground-CtNdVSAn.js";import"./ZIndexLayer-_GMRW-y_.js";import"./index-DrarxPoz.js";import"./index-DIJK83CB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CcC4x2tN.js";import"./throttle-GOg0Fvd7.js";import"./dataEntryStyles-DyEOYp64.js";import"./axisSelectors-CcZJHo_q.js";import"./d3-scale-CySl75ZF.js";import"./CartesianAxis-I4Gfetq1.js";import"./Layer-BayIcTfz.js";import"./types-BNrWE8hx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bl5XAOUo.js";import"./index-CKtel9-l.js";import"./index-Cln2IwYT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DW6cza7Q.js";import"./index-D3Qy2UUT.js";import"./CartesianChart-B9teWspu.js";import"./ZIndexPortal-pZH-aZp_.js";import"./CategoricalChart-mtPMptXy.js";import"./LabelList-CQ-NHiOO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cb_93E_H.js";import"./useAnimationId-r_2cTbPz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BGsGLrPh.js";import"./tooltipContext-CrLb3nMo.js";import"./RegisterGraphicalItemId-CLn33yWX.js";import"./ErrorBarContext-GsyzIiJa.js";import"./activeStyles-CGuSRajE.js";import"./SetGraphicalItem-CQRz0ej3.js";import"./getZIndexFromUnknown-bTFBCnQw.js";import"./useEffectiveDataKey-wQhirjtm.js";import"./omit-E6Q7P6CQ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CK2uyVOO.js";import"./step-CaKisAF4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D-AhTPsw.js";import"./Dot-CC8f5qsB.js";import"./Symbols-yzipNpVJ.js";import"./symbol-l4VrHHkB.js";import"./getRadiusAndStrokeWidthFromDot-xrAdJmyj.js";import"./useElementOffset-Bh8_OLoh.js";import"./uniqBy-B6G9ZnVo.js";import"./iteratee-DxJ21J1F.js";import"./Cross-C_SeJ845.js";import"./Sector-Dl0iMyjQ.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
