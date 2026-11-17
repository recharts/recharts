import{R as t}from"./iframe-DgA6x1az.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Bq2KiL_g.js";import{R as l}from"./zIndexSlice-BFMaekmq.js";import{C as x}from"./ComposedChart-ByKzrUfc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BkxPb_Gs.js";import{L as a}from"./Line-D138P_9w.js";import{X as c}from"./XAxis-COtnzKrI.js";import{T as g}from"./Tooltip-CbixLulH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-SeLMQAdg.js";import"./Text-5b15Y2Dk.js";import"./resolveDefaultProps-WkX6zUQT.js";import"./ZIndexLayer-CKzh_iFN.js";import"./index-TMkZxmcU.js";import"./index-D3kvvSt0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-FlPJLKCl.js";import"./throttle-BeFzmqAe.js";import"./axisSelectors-BWYipoBl.js";import"./d3-scale-CFWCEDhR.js";import"./CartesianAxis-RM9TiRUv.js";import"./Layer-4UauM4-I.js";import"./types-BWKVAmkC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cbzlud4G.js";import"./index-hmFEHNSs.js";import"./index-DfxP2LJH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DDZDydJY.js";import"./index-Bhp_Ctpy.js";import"./fillDefinitions-D7cR_ZXA.js";import"./CartesianChart-xScX7k_y.js";import"./chartDataContext-BQDV-mFo.js";import"./CategoricalChart-925-SQc0.js";import"./dataEntryStyles-C5svgbWd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DYgSAKaQ.js";import"./useAnimationId-DOzFiRYM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCImj5PR.js";import"./tooltipContext-pJINyFXa.js";import"./ErrorBarContext-BPyt6eZ1.js";import"./activeStyles-CoM8kTSe.js";import"./SetGraphicalItem-B9ymtMOj.js";import"./getZIndexFromUnknown-DwPtHb_0.js";import"./useEffectiveDataKey-B9lYa-g7.js";import"./omit-wEMfgSKe.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-9ffd66xL.js";import"./Curve-C1ngk-4z.js";import"./step-CeJDq7tp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D6pOQsPw.js";import"./Dot-DDXn63wb.js";import"./Symbols-DrLVelb5.js";import"./symbol-CCLUbilH.js";import"./useElementOffset-CAQy_pe4.js";import"./uniqBy-BFi66pIj.js";import"./iteratee-B8NyNZ1U.js";import"./Cross-CEcV7W6E.js";import"./Sector-C4f4mMlC.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
