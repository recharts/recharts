import{R as t}from"./iframe-Daqq5Gjo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DuMidNRF.js";import{R as l}from"./zIndexSlice-BPRhy0xE.js";import{C as x}from"./ComposedChart-nQXSo27c.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D9MyfRJ7.js";import{L as a}from"./Line-BUz4FFba.js";import{X as c}from"./XAxis-BQYmhAVN.js";import{T as g}from"./Tooltip-Dmp6UYF7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BEbt6EJA.js";import"./Text-CnYREx4K.js";import"./resolveDefaultProps-B2-XJuyk.js";import"./pageBackground-CQ6SoF4P.js";import"./isWellBehavedNumber-D9gMW2_W.js";import"./useId-Zrpp900Y.js";import"./useBackwardsCompatibleTheme-NW4H3-d4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CsxY4uLP.js";import"./index-b63f_pX_.js";import"./index-TeDug2B7.js";import"./dataEntryStyles-D69McnEv.js";import"./axisSelectors-CxfQkhDh.js";import"./throttle-BWDQ4DPb.js";import"./d3-scale-CqOqSRGC.js";import"./CartesianAxis-C_4O2on1.js";import"./Layer-ypMbTgoN.js";import"./types-t5uFUre1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CgHqHKUq.js";import"./index-aYBLVk0i.js";import"./index-DrcM2r0T.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DaLU39bO.js";import"./index-_CQPpMIB.js";import"./CartesianChart-CsvRURM2.js";import"./chartDataContext-BsJkFnDQ.js";import"./CategoricalChart-DFQLj_IQ.js";import"./activeStyles-CfAxM8dt.js";import"./useAnimationId-DHlojTvw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DJo7JzER.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C9mR-tcp.js";import"./tooltipContext-h_lJalxx.js";import"./RegisterGraphicalItemId-DR1l3pXT.js";import"./ErrorBarContext-DV8sm0DW.js";import"./GraphicalItemClipPath-CdmoWeX0.js";import"./SetGraphicalItem-B-kJZLux.js";import"./getZIndexFromUnknown-CfYjdChR.js";import"./useEffectiveDataKey-P6ZrBAcn.js";import"./omit-_aKQe6iX.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BTl2XcXk.js";import"./step-CMbaEgxT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C4gCSMjf.js";import"./Dot-BB5hopw1.js";import"./getRadiusAndStrokeWidthFromDot-BHbtIZis.js";import"./useElementOffset-CNPww-a6.js";import"./uniqBy-DNAjDb_i.js";import"./iteratee-BKpK3jiI.js";import"./Cross-Dwzg2nlU.js";import"./Sector-BvGMYUNB.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
