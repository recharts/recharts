import{R as e}from"./iframe-DX1vtGMO.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DLegRWnR.js";import{R as h}from"./zIndexSlice-CBHqXPZu.js";import{C as g}from"./ComposedChart-DrTtv4BR.js";import{L as x}from"./Line-BeNVFQ-c.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D456QfQQ.js";import{T as V}from"./Tooltip-B_SozOdJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cgjumwe9.js";import"./CartesianAxis-BmLV-dG0.js";import"./Layer-D3wyNfAg.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./Label-D5WIiRBw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DdHbybrS.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./immer-CyjJLdoY.js";import"./RechartsWrapper-BbcqKMmx.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./axisSelectors-CD5YpxWK.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./Curve-B-MgiVxo.js";import"./step-d6ptEm-b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D5gtlj3g.js";import"./useAnimationId-3wGGsZoS.js";import"./ActivePoints-4qRZgwnO.js";import"./Dot-UykzmigB.js";import"./RegisterGraphicalItemId-BdvIWiM6.js";import"./ErrorBarContext-BR5rkK2A.js";import"./GraphicalItemClipPath-CtH8IX0c.js";import"./SetGraphicalItem-DJ3AMYhJ.js";import"./getRadiusAndStrokeWidthFromDot-CigRqL_g.js";import"./ActiveShapeUtils-C5uepk-V.js";import"./useElementOffset-DHGceypl.js";import"./uniqBy-DwA9whMp.js";import"./iteratee-BRHNmftS.js";import"./Cross-CTITRFSj.js";import"./Rectangle-m_tCbE2d.js";import"./util-Dxo8gN5i.js";import"./Sector-B5U3iBwp.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
