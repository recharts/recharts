import{R as t}from"./iframe--Qc961ov.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BdfS4w8D.js";import{R as l}from"./zIndexSlice-Rc2BOlPQ.js";import{C as x}from"./ComposedChart-1Ra77Ckb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-2WsDtfT7.js";import{L as a}from"./Line-BJRxGEJK.js";import{X as c}from"./XAxis-CYwUm2ws.js";import{T as g}from"./Tooltip-EzqjBmkr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BPAtAFkR.js";import"./Text-DukYE8yg.js";import"./resolveDefaultProps-D0aZwB6X.js";import"./pageBackground-DnfHP8JU.js";import"./isWellBehavedNumber-BbQJ1Ue6.js";import"./useId-DBBGR5j5.js";import"./useBackwardsCompatibleTheme-BAsN2dru.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CboR9GKx.js";import"./index-BaNjZzFe.js";import"./index-sLpNG2DY.js";import"./dataEntryStyles-D5gnKJwo.js";import"./axisSelectors-CnmzOTaD.js";import"./throttle-D5ruWPez.js";import"./d3-scale-BiVvCoqI.js";import"./CartesianAxis-BwXCcZP6.js";import"./Layer-CSo0ACXf.js";import"./types-CdbE1zIR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-iEsOV4gM.js";import"./index-C334R2OZ.js";import"./index-gD-WMNxq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5yfwU4S.js";import"./index-CIuk1Fk6.js";import"./CartesianChart-BPOxbtvv.js";import"./chartDataContext-B9pBQpH6.js";import"./CategoricalChart-BTLrwTlO.js";import"./activeStyles-CmGMz93r.js";import"./useAnimationId-CtnGdaHg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPuH_shy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRmxiGhG.js";import"./tooltipContext-Co8wMlo1.js";import"./RegisterGraphicalItemId-CC6U92H6.js";import"./ErrorBarContext-CJzEAfVg.js";import"./GraphicalItemClipPath-dlzptreQ.js";import"./SetGraphicalItem-CzqDdYjp.js";import"./getZIndexFromUnknown-Dv9psM4b.js";import"./useEffectiveDataKey-B387RzKO.js";import"./omit-I1vbqsah.js";import"./isArguments-yB-y1yaH.js";import"./Curve-lw10hhz6.js";import"./step-DEIP8fko.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DkjYVK_A.js";import"./Dot-DryseeAH.js";import"./getRadiusAndStrokeWidthFromDot-CMCgIGue.js";import"./useElementOffset-wB-GlItD.js";import"./uniqBy-DboUDVRO.js";import"./iteratee-BVMr74LW.js";import"./Cross-DKUKET6m.js";import"./Sector-B65usGDT.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
