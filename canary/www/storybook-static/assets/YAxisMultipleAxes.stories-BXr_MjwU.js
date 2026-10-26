import{R as t}from"./iframe-COIGCNXI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-MNgk7gZM.js";import{R as l}from"./zIndexSlice-SGGyD0oS.js";import{C as x}from"./ComposedChart-BUtbgPw8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DIc2l3yW.js";import{L as a}from"./Line-ma9HaId0.js";import{X as c}from"./XAxis-CKJPf7Wd.js";import{T as g}from"./Tooltip-BtRgioyf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BzUBYLaO.js";import"./Text-BbaXzr-_.js";import"./resolveDefaultProps-CZS8aiFv.js";import"./pageBackground-B1zZiLSr.js";import"./useId-uRdV4O5l.js";import"./ZIndexLayer-CkLN3vho.js";import"./index-NGI2UEpG.js";import"./index-CUG4PNHE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BmRQgzqt.js";import"./throttle-BlyN22Fr.js";import"./dataEntryStyles-lF4b12oa.js";import"./axisSelectors-BNkJw-2U.js";import"./d3-scale-VptsFP1A.js";import"./CartesianAxis-DcbYB9kS.js";import"./Layer-CTEYWFZQ.js";import"./types-CFJTQnsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BSSoKuOA.js";import"./index-C5of7-FY.js";import"./index-C_FuKoEm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CSAoBtxd.js";import"./index-BPTy_Aa_.js";import"./CartesianChart-CrElt8Ki.js";import"./chartDataContext-oGIvKB_Y.js";import"./CategoricalChart-CDhmqNu9.js";import"./activeStyles-DPX8m1qG.js";import"./useAnimationId-C1qK0jXb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrpU_fhN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcPjXX29.js";import"./tooltipContext-DKugW0J7.js";import"./RegisterGraphicalItemId-DZ8oXJnI.js";import"./ErrorBarContext-B7OlR22L.js";import"./SetGraphicalItem-D643u_Ng.js";import"./getZIndexFromUnknown-QVsgQG4A.js";import"./useEffectiveDataKey-DqlQcCPn.js";import"./omit-CtkrDTz4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C5TSA5DD.js";import"./step-C9LyDlWE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C-R45DhW.js";import"./Dot-vDehyzRD.js";import"./getRadiusAndStrokeWidthFromDot-BWolhaji.js";import"./useElementOffset-DjofQ5-m.js";import"./uniqBy-BGB3FWFX.js";import"./iteratee-BGdRtgf7.js";import"./Cross-BQX1HV7D.js";import"./Sector-CdYXHMxl.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
