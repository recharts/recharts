import{R as t}from"./iframe-D3XpTouC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-FbLbV3M6.js";import{R as l}from"./zIndexSlice-nnBmRw_5.js";import{C as x}from"./ComposedChart-e1zdTWw-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D8KbmtPG.js";import{L as a}from"./Line-y-cDtTXP.js";import{X as c}from"./XAxis-gmDKzFC9.js";import{T as g}from"./Tooltip-DAiSkgfh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C-8XXSAc.js";import"./Text-B7A0Zl2p.js";import"./resolveDefaultProps-DlZqYg6P.js";import"./pageBackground-BB2_LToU.js";import"./useId-2hxDKCu1.js";import"./ZIndexLayer-DtbAElLD.js";import"./index-DHhgNiiB.js";import"./index-DTv10PLm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3Rr3kNg.js";import"./throttle-B0HYRial.js";import"./dataEntryStyles-lBmwmj-v.js";import"./axisSelectors-DLLpPrx1.js";import"./d3-scale-k39_yHUv.js";import"./CartesianAxis-DzZUDYVE.js";import"./Layer-D4bzgnBD.js";import"./types-BmT-ScX1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BzU7dsOB.js";import"./index-CSVEFX3e.js";import"./index-nr8cRX1L.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-sYdg_-aY.js";import"./index-BIeNSbTD.js";import"./CartesianChart-DoW6CJ46.js";import"./chartDataContext-BRwGn-1-.js";import"./CategoricalChart-C7DNEYYD.js";import"./activeStyles-CSOHGyzI.js";import"./useAnimationId-SaX7cxM4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pIaUnyaB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcUYSyXw.js";import"./tooltipContext-CoMR-16p.js";import"./RegisterGraphicalItemId-BJwNChl_.js";import"./ErrorBarContext-6Mnl7Bdn.js";import"./SetGraphicalItem-9ERbeIZR.js";import"./getZIndexFromUnknown-lf0XNuk4.js";import"./useEffectiveDataKey-BFS5aOAm.js";import"./omit-B4fJ_quc.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CryrSNFf.js";import"./step-Bc6BB28K.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D01Qbd0d.js";import"./Dot-Dh-neF-t.js";import"./getRadiusAndStrokeWidthFromDot-2Ds3FVhy.js";import"./useElementOffset-BeSSiUDx.js";import"./uniqBy-CG2_XuPj.js";import"./iteratee-CyT4hR1F.js";import"./Cross-BUhjZEN3.js";import"./Sector-DmvTpGH_.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
