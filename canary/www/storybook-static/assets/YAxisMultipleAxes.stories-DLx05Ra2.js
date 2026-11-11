import{R as t}from"./iframe-DnaR6K_4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-wlK6hgFu.js";import{R as l}from"./zIndexSlice-HRkrVJ9X.js";import{C as x}from"./ComposedChart-D_61vaIh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DTIoHzvS.js";import{L as a}from"./Line-BiRiWgrj.js";import{X as c}from"./XAxis-JXd9qzo8.js";import{T as g}from"./Tooltip-Gq9KpMi8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BEN9LI2d.js";import"./Text-Lh_HZPYn.js";import"./resolveDefaultProps-xcCt7KB7.js";import"./ZIndexLayer-B1l-eSb9.js";import"./index-DMJIF8QV.js";import"./index-BgXLdz_X.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-vWLUjf8B.js";import"./throttle-CmS6TmXS.js";import"./axisSelectors-BZT-kfpn.js";import"./d3-scale-BgvfK_mE.js";import"./CartesianAxis-CAMeCfaf.js";import"./Layer-BH_fCpBP.js";import"./types-Dnad10Cx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C__KIq2D.js";import"./index-DmfGSg0J.js";import"./index-D5D7Mpig.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CRNPPXNH.js";import"./index-CnPRymSo.js";import"./fillDefinitions-BLgrfcm8.js";import"./CartesianChart-DnaM71J4.js";import"./chartDataContext-aWkBfLLJ.js";import"./CategoricalChart-CBGPntpg.js";import"./dataEntryStyles-BUjHKeGu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dgg35g8F.js";import"./useAnimationId-DvJiKZIl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jyclsiEg.js";import"./tooltipContext-t-yh_HfE.js";import"./ErrorBarContext-Bc_t8m9L.js";import"./activeStyles-WfyfS5co.js";import"./SetGraphicalItem-DJe9VMWh.js";import"./getZIndexFromUnknown-DFK-omAF.js";import"./useEffectiveDataKey-BtEPyz6t.js";import"./omit-Bjvs8KPq.js";import"./isArguments-yB-y1yaH.js";import"./Curve-nkhv6z3O.js";import"./step-CWTcW_Xz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BGPPfRbm.js";import"./Dot-CMPD7QLc.js";import"./Symbols-ClvwSwOZ.js";import"./symbol-QpFOfTRN.js";import"./getRadiusAndStrokeWidthFromDot-EcMggKSX.js";import"./useElementOffset-1fsM2BLX.js";import"./uniqBy-BerQeZ6C.js";import"./iteratee-BOqKd5kc.js";import"./Cross-BzVInf1h.js";import"./Sector-C-O6fWmF.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
