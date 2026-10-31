import{R as t}from"./iframe-CGtTT9aO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CPZ41WbR.js";import{R as l}from"./zIndexSlice-DkqERUsC.js";import{C as x}from"./ComposedChart-CtOwOAMH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BTS_7pCn.js";import{L as a}from"./Line-B39YTIfI.js";import{X as c}from"./XAxis-Cs9YVmSO.js";import{T as g}from"./Tooltip-D20fn4S1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CdpdsstW.js";import"./Text-CPcXRBKa.js";import"./resolveDefaultProps-BOjz-2GT.js";import"./DOMUtils-Lkl9NNxk.js";import"./ZIndexLayer-BNZ9nAXZ.js";import"./index-D5qFyhva.js";import"./index-BaBVYkzg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C5R6EJHs.js";import"./throttle-Cpyd11_g.js";import"./axisSelectors-B4GsvVbU.js";import"./d3-scale-HCxTFMcs.js";import"./CartesianAxis-DK3VbMKT.js";import"./Layer-BOfjEgNF.js";import"./types-Do3ps9Vj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvmQK_hy.js";import"./index-DFHlfpO_.js";import"./index-oOofm89c.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bg-qxCCU.js";import"./index-fDgmIFeX.js";import"./CartesianChart-BOnMx4gA.js";import"./ZIndexPortal-CtHFHKQR.js";import"./CategoricalChart-BhkaiiYp.js";import"./LabelList-bhGj16_R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8kMMZYHv.js";import"./useAnimationId-C_28wM0V.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNWigvv2.js";import"./tooltipContext-rKTBIOtb.js";import"./dataEntryStyles-CQ5H-98B.js";import"./themeFill-BkM1x4hA.js";import"./ErrorBarContext-9FDAfVa2.js";import"./activeStyles-Dtv8ZhnZ.js";import"./SetGraphicalItem-8Ajtlbfj.js";import"./getZIndexFromUnknown-DqG6d2wF.js";import"./useEffectiveDataKey-DHKFzj0x.js";import"./omit-ClQsrm33.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BOBD875w.js";import"./step-BRhFbrj_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DxEPNf6W.js";import"./Dot-C5v9BtZ0.js";import"./Symbols-OSdQxEEJ.js";import"./symbol-BfL8oXc2.js";import"./getRadiusAndStrokeWidthFromDot-BkHpd6-h.js";import"./useElementOffset-BatF9isV.js";import"./uniqBy-CZnu9ysp.js";import"./iteratee-BkG8OlH1.js";import"./Cross-wQd5zFbJ.js";import"./Sector-q7bxLxmm.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
