import{R as t}from"./iframe-B3TE-nU3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DsQMJ5Zr.js";import{R as l}from"./zIndexSlice-CTTS6cFj.js";import{C as x}from"./ComposedChart-CoUJ-8Kk.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D58aIu_r.js";import{L as a}from"./Line-C9ocvs2A.js";import{X as c}from"./XAxis-h5fh4YlR.js";import{T as g}from"./Tooltip-DvDkrF7O.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CBnDrrJb.js";import"./Text-Dg5b12Q4.js";import"./resolveDefaultProps-CZyWFquG.js";import"./ZIndexLayer-CcszVre3.js";import"./index-CwYGoluT.js";import"./index-BdYXEAEl.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Du86AxQZ.js";import"./throttle-CbHIruzi.js";import"./axisSelectors-DZCqrQSM.js";import"./d3-scale-CXmLRtz9.js";import"./CartesianAxis-98BHMJXj.js";import"./Layer-ChziGKVJ.js";import"./types-DiSBkFzd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CnKrAq7k.js";import"./index-DGF3N8N0.js";import"./index-QNAAg88T.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cj-eh_A9.js";import"./index-j8tkVAM0.js";import"./fillDefinitions-ExsKJJdV.js";import"./CartesianChart-BlnVLBxP.js";import"./chartDataContext-CdnFs56-.js";import"./CategoricalChart-ZasnE1da.js";import"./dataEntryStyles-DR0RxE_5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-JiOIyKLl.js";import"./useAnimationId-CxiMpo3b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bxv-7xaq.js";import"./tooltipContext-D0RZDcsJ.js";import"./ErrorBarContext-CAoDHE0Y.js";import"./activeStyles-P5uz91Wl.js";import"./SetGraphicalItem-H8Hr2AbP.js";import"./getZIndexFromUnknown-LRbYZ4zA.js";import"./useEffectiveDataKey-DPfqIOjF.js";import"./omit-DruE3GsZ.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-sWaZWzqd.js";import"./Curve-DakK0sdO.js";import"./step-DFLs3YCD.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Ds08HXXd.js";import"./Dot-AAIkJYcq.js";import"./Symbols-BSwXR0zr.js";import"./symbol-DheZZ-vM.js";import"./useElementOffset-C_UZj4GX.js";import"./uniqBy-RWn0hC0g.js";import"./iteratee-BJFUBVEZ.js";import"./Cross-LIPHrR4i.js";import"./Sector-BQncNsel.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
