import{R as t}from"./iframe-83g2bT9h.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DKEYM08g.js";import{R as l}from"./zIndexSlice-CfRH_Gkg.js";import{C as x}from"./ComposedChart-MoKKZ9CA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-sXu5HZ41.js";import{L as a}from"./Line-D5Z7nKk5.js";import{X as c}from"./XAxis-CPLb-uD7.js";import{T as g}from"./Tooltip-uBW61v07.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DfuHALhb.js";import"./Text-DUBqVL79.js";import"./resolveDefaultProps-BpxedNkM.js";import"./pageBackground-DKLyt_8U.js";import"./isWellBehavedNumber-BgkxdIs4.js";import"./useId-zomQiW43.js";import"./useBackwardsCompatibleTheme-BcLG_xbs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DeHUv8B_.js";import"./index-D9-kpgN8.js";import"./index-HFr4exi0.js";import"./axisSelectors-C8tSZ6WQ.js";import"./throttle-4AZ4DRQb.js";import"./d3-scale-CVvcmCdK.js";import"./CartesianAxis-DvK2UzOE.js";import"./Layer-B91IFUVw.js";import"./types-CMZudBWv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xHtkKbmz.js";import"./index-B7VmcSkv.js";import"./index-DLYfmWnd.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-p2KZrAJR.js";import"./index-D-OQyWuZ.js";import"./CartesianChart-D1Nmaq06.js";import"./chartDataContext-sHdkOGNI.js";import"./CategoricalChart-D7JsCRcw.js";import"./activeStyles-CdFniEfO.js";import"./useAnimationId-DUwxwMTt.js";import"./dataEntryStyles-B1gd_eml.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BS77cgxi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYOV0Fte.js";import"./tooltipContext-GOy0TlDn.js";import"./ErrorBarContext-6HrkNfKi.js";import"./GraphicalItemClipPath-qo2wW-Qb.js";import"./SetGraphicalItem-BS6yKsvN.js";import"./getZIndexFromUnknown-DNT2iAn2.js";import"./useEffectiveDataKey-B2aQWgd3.js";import"./Curve-BzUWFYb9.js";import"./step-BklymoVp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DPZpTkVA.js";import"./Dot-CmrA2XZR.js";import"./getRadiusAndStrokeWidthFromDot-CQHfNXLK.js";import"./useElementOffset-BnQIDSYq.js";import"./uniqBy-B2Rp8ZH2.js";import"./iteratee-CXHp8yUW.js";import"./Cross-zx4z37CW.js";import"./Sector-DCfEH35h.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
