import{R as t}from"./iframe-ChdTnuJZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BUBRSx7t.js";import{R as l}from"./zIndexSlice-DTuHfx_p.js";import{C as x}from"./ComposedChart-BLgRXBFB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-1Qzh7UMz.js";import{L as a}from"./Line-zKyE8rWG.js";import{X as c}from"./XAxis--3XEHI4a.js";import{T as g}from"./Tooltip-ClIVzJrA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BljYdgC6.js";import"./CartesianAxis-DeJGk3LW.js";import"./Layer-CbZTDJjb.js";import"./resolveDefaultProps-CmZ2lQdU.js";import"./Text-BqDkAbeE.js";import"./DOMUtils-BvzDzAj2.js";import"./isWellBehavedNumber-CwWlLsdj.js";import"./Label-ODDr4Kfk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DzezyKwN.js";import"./index-DteGnOzp.js";import"./index-Dq9WTpJB.js";import"./types-Blkff1hk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-IsDkktPX.js";import"./immer-DHJNVAe2.js";import"./RechartsWrapper-VmQ82j3S.js";import"./index-Dl7IIVL4.js";import"./index-BnBFbJTw.js";import"./axisSelectors-UyjPZuEn.js";import"./d3-scale-Ch-uXsQ6.js";import"./CartesianChart-DV13kS8z.js";import"./chartDataContext-COA3hxu-.js";import"./CategoricalChart-JBgYyUd3.js";import"./tooltipContext-YyJGWWFy.js";import"./AnimatedItems-BDYJ2E_L.js";import"./useAnimationId-w9_6HKPK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4VesXv4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-t-acR5v1.js";import"./RegisterGraphicalItemId-BcQylArw.js";import"./ErrorBarContext-CZ-WTEC7.js";import"./GraphicalItemClipPath-D0CBaYt_.js";import"./SetGraphicalItem-Dx80ZtIC.js";import"./getZIndexFromUnknown-B7eKOIAo.js";import"./graphicalItemSelectors-CN8u0mca.js";import"./Curve-BLJbrdKh.js";import"./step-C9h4VCgc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-zze0EoKb.js";import"./Dot-B3nzfqLK.js";import"./getRadiusAndStrokeWidthFromDot-JQNnNq8i.js";import"./useElementOffset-EA0CDPIO.js";import"./uniqBy-XDLsRfro.js";import"./iteratee-DZC8fA35.js";import"./Cross-BR5m8PSA.js";import"./Sector-CFHu7zJj.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
