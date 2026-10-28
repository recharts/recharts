import{R as t}from"./iframe-BGa_aXYV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CP1brurK.js";import{R as l}from"./zIndexSlice-Ck6l0OZs.js";import{C as x}from"./ComposedChart-wHTG2hfS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-hPUmwWmc.js";import{L as a}from"./Line-Y16V4sUQ.js";import{X as c}from"./XAxis-CE3oHyxg.js";import{T as g}from"./Tooltip-MhnN-294.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bzq01dK8.js";import"./Text-mATLrig6.js";import"./resolveDefaultProps--MxbOSxe.js";import"./pageBackground-BUMPEk7V.js";import"./ZIndexLayer-D3eS8Esu.js";import"./index-wG94lJw7.js";import"./index-Bi5RYh62.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DZZ_sV95.js";import"./throttle-odPHgumR.js";import"./axisSelectors-BhlTci4j.js";import"./d3-scale-D32hxSnZ.js";import"./CartesianAxis-D2QFH6SB.js";import"./Layer-Bzj9T_Rp.js";import"./types-BlkSdkM7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D_6jJO7k.js";import"./index-CCS8tdiB.js";import"./index-_XAYd-SQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BTlrgf4s.js";import"./index-DF81NAeA.js";import"./CartesianChart-BVZLzzem.js";import"./ZIndexPortal-yBnaKAUB.js";import"./CategoricalChart-C-tokN3T.js";import"./LabelList-dSe8emrx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNMIfASl.js";import"./useAnimationId-BY6DYNe9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Luuswf_P.js";import"./tooltipContext-rNLAi3ah.js";import"./dataEntryStyles-3sm9ZLw4.js";import"./ErrorBarContext-DCAq7oKy.js";import"./activeStyles-DZX2Soqz.js";import"./SetGraphicalItem-Ds0lF9cJ.js";import"./getZIndexFromUnknown-DnoxmsUU.js";import"./useEffectiveDataKey-D5yK2eiQ.js";import"./omit-ax2xeIYV.js";import"./isArguments-yB-y1yaH.js";import"./Curve-yqHv3532.js";import"./step-Bk4v6FYF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CflJ3BqH.js";import"./Dot-DIjQdgeX.js";import"./Symbols-D-n9Z7lT.js";import"./symbol-CZaSDg5i.js";import"./getRadiusAndStrokeWidthFromDot-Dl4gueRZ.js";import"./useElementOffset-PZh3tzwx.js";import"./uniqBy-BD2wLUuV.js";import"./iteratee-GuFU32s6.js";import"./Cross-D3L1ZFfF.js";import"./Sector-hq76lirF.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
