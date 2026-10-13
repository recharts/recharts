import{R as t}from"./iframe-BKHpBCGR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BEhxTh9O.js";import{R as l}from"./zIndexSlice-MbsPskuO.js";import{C as x}from"./ComposedChart-iKWFtV78.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B7j_Zzvh.js";import{L as a}from"./Line-UOyYMjp1.js";import{X as c}from"./XAxis-DTRZ1dWN.js";import{T as g}from"./Tooltip-BPoeNbLz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-O1JP__wG.js";import"./Text-DYCZls4m.js";import"./resolveDefaultProps-LMHkslvY.js";import"./pageBackground-CYge6A3w.js";import"./isWellBehavedNumber-DZ2Xn8RG.js";import"./useId-Dt-1BK0Z.js";import"./useBackwardsCompatibleTheme-C46GemJr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdmXZICd.js";import"./index-BGfSAvuv.js";import"./index-AIIPc7Ew.js";import"./axisSelectors-CJodVBjM.js";import"./throttle-3nfkHG5O.js";import"./d3-scale-CFmaNxVK.js";import"./CartesianAxis-mCcuS_Uy.js";import"./Layer-DybYLhVT.js";import"./types-Ck1lG8KT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZuStCiV.js";import"./index-MJAbFl6s.js";import"./index-D7XXjqey.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D-Zfjt-o.js";import"./index-pfuxfga8.js";import"./CartesianChart-CXURKO2Z.js";import"./chartDataContext-BJRV3EGA.js";import"./CategoricalChart-sVMN8Krq.js";import"./activeStyles-Ciq5Cwqo.js";import"./useAnimationId-yls0YfbP.js";import"./dataEntryStyles-dsuf4aHw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDgGLfNl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQESG7Jg.js";import"./tooltipContext-CPk4H5jm.js";import"./ErrorBarContext-D-66_lvv.js";import"./GraphicalItemClipPath--201yH7F.js";import"./SetGraphicalItem-BcZa1iuc.js";import"./getZIndexFromUnknown-DRba0iYY.js";import"./useEffectiveDataKey-BIsGwEM1.js";import"./Curve-DUSP7h70.js";import"./step-Dts2RvRs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BAFHTjJh.js";import"./Dot-Ba-w2X1N.js";import"./getRadiusAndStrokeWidthFromDot-DBGL35Fg.js";import"./useElementOffset-Cn98WGsz.js";import"./uniqBy-CShR7vUs.js";import"./iteratee-BNxeOl7Y.js";import"./Cross-azVbcZgi.js";import"./Sector-kZE3ZYJf.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
