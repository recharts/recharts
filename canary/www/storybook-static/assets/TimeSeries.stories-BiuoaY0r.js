import{R as e}from"./iframe-Bz6TqJnq.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DVlM8vXe.js";import{R as h}from"./zIndexSlice-C-cqgMlF.js";import{C as g}from"./ComposedChart-BAS1f6y5.js";import{L as x}from"./Line-DELGVTYz.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-twe7FoUl.js";import{T as V}from"./Tooltip-BoaaN165.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DH-w_D5j.js";import"./Layer-BX7MhZ6S.js";import"./resolveDefaultProps-DEKZytWh.js";import"./Text-DOaj_kWf.js";import"./DOMUtils-Cex05Ge6.js";import"./isWellBehavedNumber-M6S8uXi3.js";import"./useId-1b7xgL0h.js";import"./useBackwardsCompatibleTheme-yIhTdrUA.js";import"./Label-lSot61nz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DhhI2NR0.js";import"./index-BQLoICSq.js";import"./index-beBiy9wx.js";import"./types-4BkRWtr0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DQraWAfi.js";import"./throttle-BuIt2HDm.js";import"./index-etoInMv6.js";import"./index-DlUolpmt.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper--vq1vTqI.js";import"./axisSelectors-BfBX80u0.js";import"./index-C9aozdfF.js";import"./CartesianChart-DP7g5nZU.js";import"./chartDataContext-D2R1zViF.js";import"./CategoricalChart-CRL5ERGJ.js";import"./Curve-M6KVk8IF.js";import"./step-BK8r0hX3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDH0_5C2.js";import"./useAnimationId-D4N1wqR_.js";import"./ActivePoints-BVtl5KJC.js";import"./Dot--D_QZvUF.js";import"./RegisterGraphicalItemId-D64byefQ.js";import"./ErrorBarContext-CGc5rrEx.js";import"./GraphicalItemClipPath-CDFQRsft.js";import"./SetGraphicalItem-DzfWk83Z.js";import"./getRadiusAndStrokeWidthFromDot-CF5ztDsQ.js";import"./ActiveShapeUtils-BxAOP67q.js";import"./useGraphicalItemIdentity-CDqVZsrI.js";import"./useElementOffset-DaMWcsMn.js";import"./uniqBy-CQ7Y-pcX.js";import"./iteratee-DSPWK7cC.js";import"./Cross-BznlOoGD.js";import"./Rectangle-nQBZL8n2.js";import"./util-Dxo8gN5i.js";import"./Sector-B0YiLuYU.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
