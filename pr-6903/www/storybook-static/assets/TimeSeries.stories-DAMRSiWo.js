import{e}from"./iframe-Bn_7jga7.js";import{X as s}from"./XAxis-CkQlFxje.js";import{R as y}from"./arrayEqualityCheck-CSuBYCWj.js";import{C as g}from"./ComposedChart-3lWxqoA_.js";import{L as x}from"./Line-DpIWCQIN.js";import{R as S}from"./RechartsHookInspector-B4H5Lyo-.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-B3n8BDRj.js";import{T as O}from"./Tooltip-DQIXZzn5.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCdxs1iD.js";import"./CartesianAxis-5Tz-WD7f.js";import"./Layer-COTxk2h3.js";import"./Text-BQI8M-tq.js";import"./DOMUtils-CRyukOD8.js";import"./Label-CS-Zhu5a.js";import"./PolarUtils-CBWSHxoJ.js";import"./ZIndexLayer-BXCJNtZK.js";import"./zIndexSlice-usP7cHtF.js";import"./types-SXh4X6nB.js";import"./hooks-BL6pVXml.js";import"./CategoricalChart-C3CVYlbu.js";import"./RechartsWrapper-DSmS8nVp.js";import"./CartesianChart-CFgpMI4e.js";import"./chartDataContext-CGN_dwZ0.js";import"./ReactUtils-GlbSvDIy.js";import"./ActivePoints-L2b5HdRv.js";import"./Dot-B7wgCnVd.js";import"./RegisterGraphicalItemId-BEPfbN5x.js";import"./ErrorBarContext-D9hbJwiU.js";import"./GraphicalItemClipPath-ECv6yN9n.js";import"./SetGraphicalItem-BWnuaPkJ.js";import"./useAnimationId-id_mTj1h.js";import"./getRadiusAndStrokeWidthFromDot-DzdTRjkG.js";import"./ActiveShapeUtils-BF53wkQd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Wjj6MIuU.js";import"./Trapezoid-BCX-j7xi.js";import"./Sector-CuwRjw3S.js";import"./Symbols-DCEXw1ah.js";import"./Curve-qns-9S5i.js";import"./index-wlSGh2Q3.js";import"./ChartSizeDimensions-C28_hYOe.js";import"./OffsetShower-BxoubtuL.js";import"./PlotAreaShower-Czw-Abfi.js";import"./useElementOffset-B0onx-6f.js";import"./iteratee-UAJrQy9o.js";import"./Cross-D4gM0r3o.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
